import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TokenList } from "./token/TokenList";
import { TokenCreate } from "./token/TokenCreate";
import { TokenEdit } from "./token/TokenEdit";
import { TokenShow } from "./token/TokenShow";
import { ExchangeList } from "./exchange/ExchangeList";
import { ExchangeCreate } from "./exchange/ExchangeCreate";
import { ExchangeEdit } from "./exchange/ExchangeEdit";
import { ExchangeShow } from "./exchange/ExchangeShow";
import { ArbitragePathList } from "./arbitragePath/ArbitragePathList";
import { ArbitragePathCreate } from "./arbitragePath/ArbitragePathCreate";
import { ArbitragePathEdit } from "./arbitragePath/ArbitragePathEdit";
import { ArbitragePathShow } from "./arbitragePath/ArbitragePathShow";
import { TradeList } from "./trade/TradeList";
import { TradeCreate } from "./trade/TradeCreate";
import { TradeEdit } from "./trade/TradeEdit";
import { TradeShow } from "./trade/TradeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ArbitrageBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Token"
          list={TokenList}
          edit={TokenEdit}
          create={TokenCreate}
          show={TokenShow}
        />
        <Resource
          name="Exchange"
          list={ExchangeList}
          edit={ExchangeEdit}
          create={ExchangeCreate}
          show={ExchangeShow}
        />
        <Resource
          name="ArbitragePath"
          list={ArbitragePathList}
          edit={ArbitragePathEdit}
          create={ArbitragePathCreate}
          show={ArbitragePathShow}
        />
        <Resource
          name="Trade"
          list={TradeList}
          edit={TradeEdit}
          create={TradeCreate}
          show={TradeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
