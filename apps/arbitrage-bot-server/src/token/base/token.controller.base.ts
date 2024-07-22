/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TokenService } from "../token.service";
import { TokenCreateInput } from "./TokenCreateInput";
import { Token } from "./Token";
import { TokenFindManyArgs } from "./TokenFindManyArgs";
import { TokenWhereUniqueInput } from "./TokenWhereUniqueInput";
import { TokenUpdateInput } from "./TokenUpdateInput";

export class TokenControllerBase {
  constructor(protected readonly service: TokenService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Token })
  async createToken(@common.Body() data: TokenCreateInput): Promise<Token> {
    return await this.service.createToken({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        symbolField: true,
        name: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Token] })
  @ApiNestedQuery(TokenFindManyArgs)
  async tokens(@common.Req() request: Request): Promise<Token[]> {
    const args = plainToClass(TokenFindManyArgs, request.query);
    return this.service.tokens({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        symbolField: true,
        name: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Token })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async token(
    @common.Param() params: TokenWhereUniqueInput
  ): Promise<Token | null> {
    const result = await this.service.token({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        symbolField: true,
        name: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Token })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateToken(
    @common.Param() params: TokenWhereUniqueInput,
    @common.Body() data: TokenUpdateInput
  ): Promise<Token | null> {
    try {
      return await this.service.updateToken({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          symbolField: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Token })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteToken(
    @common.Param() params: TokenWhereUniqueInput
  ): Promise<Token | null> {
    try {
      return await this.service.deleteToken({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          symbolField: true,
          name: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
