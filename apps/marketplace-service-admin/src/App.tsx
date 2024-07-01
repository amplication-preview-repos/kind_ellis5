import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { StoreList } from "./store/StoreList";
import { StoreCreate } from "./store/StoreCreate";
import { StoreEdit } from "./store/StoreEdit";
import { StoreShow } from "./store/StoreShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { LogisticsList } from "./logistics/LogisticsList";
import { LogisticsCreate } from "./logistics/LogisticsCreate";
import { LogisticsEdit } from "./logistics/LogisticsEdit";
import { LogisticsShow } from "./logistics/LogisticsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DeliveryServiceList } from "./deliveryService/DeliveryServiceList";
import { DeliveryServiceCreate } from "./deliveryService/DeliveryServiceCreate";
import { DeliveryServiceEdit } from "./deliveryService/DeliveryServiceEdit";
import { DeliveryServiceShow } from "./deliveryService/DeliveryServiceShow";
import { DeliveryAgentList } from "./deliveryAgent/DeliveryAgentList";
import { DeliveryAgentCreate } from "./deliveryAgent/DeliveryAgentCreate";
import { DeliveryAgentEdit } from "./deliveryAgent/DeliveryAgentEdit";
import { DeliveryAgentShow } from "./deliveryAgent/DeliveryAgentShow";
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
        title={"MarketplaceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Store"
          list={StoreList}
          edit={StoreEdit}
          create={StoreCreate}
          show={StoreShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Logistics"
          list={LogisticsList}
          edit={LogisticsEdit}
          create={LogisticsCreate}
          show={LogisticsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="DeliveryService"
          list={DeliveryServiceList}
          edit={DeliveryServiceEdit}
          create={DeliveryServiceCreate}
          show={DeliveryServiceShow}
        />
        <Resource
          name="DeliveryAgent"
          list={DeliveryAgentList}
          edit={DeliveryAgentEdit}
          create={DeliveryAgentCreate}
          show={DeliveryAgentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
