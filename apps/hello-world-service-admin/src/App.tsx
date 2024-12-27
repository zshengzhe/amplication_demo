import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HelloMessageEntityList } from "./helloMessageEntity/HelloMessageEntityList";
import { HelloMessageEntityCreate } from "./helloMessageEntity/HelloMessageEntityCreate";
import { HelloMessageEntityEdit } from "./helloMessageEntity/HelloMessageEntityEdit";
import { HelloMessageEntityShow } from "./helloMessageEntity/HelloMessageEntityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"HelloWorldService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HelloMessageEntity"
          list={HelloMessageEntityList}
          edit={HelloMessageEntityEdit}
          create={HelloMessageEntityCreate}
          show={HelloMessageEntityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
