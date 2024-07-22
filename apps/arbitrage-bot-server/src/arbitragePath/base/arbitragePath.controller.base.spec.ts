import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ArbitragePathController } from "../arbitragePath.controller";
import { ArbitragePathService } from "../arbitragePath.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  tokenA: "exampleTokenA",
  tokenB: "exampleTokenB",
  tokenC: "exampleTokenC",
  exchangeA: "exampleExchangeA",
  exchangeB: "exampleExchangeB",
  exchangeC: "exampleExchangeC",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  tokenA: "exampleTokenA",
  tokenB: "exampleTokenB",
  tokenC: "exampleTokenC",
  exchangeA: "exampleExchangeA",
  exchangeB: "exampleExchangeB",
  exchangeC: "exampleExchangeC",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    tokenA: "exampleTokenA",
    tokenB: "exampleTokenB",
    tokenC: "exampleTokenC",
    exchangeA: "exampleExchangeA",
    exchangeB: "exampleExchangeB",
    exchangeC: "exampleExchangeC",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  tokenA: "exampleTokenA",
  tokenB: "exampleTokenB",
  tokenC: "exampleTokenC",
  exchangeA: "exampleExchangeA",
  exchangeB: "exampleExchangeB",
  exchangeC: "exampleExchangeC",
};

const service = {
  createArbitragePath() {
    return CREATE_RESULT;
  },
  arbitragePaths: () => FIND_MANY_RESULT,
  arbitragePath: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ArbitragePath", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ArbitragePathService,
          useValue: service,
        },
      ],
      controllers: [ArbitragePathController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /arbitragePaths", async () => {
    await request(app.getHttpServer())
      .post("/arbitragePaths")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /arbitragePaths", async () => {
    await request(app.getHttpServer())
      .get("/arbitragePaths")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /arbitragePaths/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arbitragePaths"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /arbitragePaths/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arbitragePaths"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /arbitragePaths existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/arbitragePaths")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/arbitragePaths")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
