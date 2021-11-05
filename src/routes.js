// import React from "react";
// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// import DashboardLayout from "./layouts/DashboardLayout";

// core components/views for Admin layout
import Home from "views/Home/Home.js";
import Wallet from "views/Wallet/Wallet";
import Beneficiaries from "views/Beneficiaries/Beneficiaries";
import BankAccounts from "views/BankAccounts/BankAccounts.js";

import Profile from "views/Profile/Profile.js";
import ExchangeRate from "views/ExchangeRates/ExchangeRate.js";
import NewTransaction from "views/Transactions/Transaction/NewTransaction/NewTransaction";
import AllTransaction from "views/Transactions/Transaction/AllTransaction/AllTransaction";
import Support from "views/Support/Support";

// function Routes() {
//   return (
// <BrowserRouter>
//   <Route
//     render={(props) => (
//       <DashboardLayout {...props}>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/home" exact component={Home} />
//           <Route path="/transactions" component={Transactions} />
//           <Route path="/alltransaction" component={allTransaction} />
//           <Route path="/newtransaction" component={NewTransaction} />
//           <Route path="/beneficiaries" component={Beneficiaries} />
//           <Route path="/wallet" component={Wallet} />
//           <Route path="/bank_account" component={BankAccounts} />
//           <Route path="/exchangeRate" component={ExchangeRate} />
//           <Route path="/profile" component={Profile} />
//           <Route path="/support" component={Support} />
//         </Switch>
//       </DashboardLayout>
//     )}
//   />
//     </BrowserRouter>
//   );
// }
// export default Routes;

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    layout: "/dashboard",
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet,
    layout: "/dashboard",
  },
  {
    path: "/exchangeRate",
    name: "Exchange Rate",
    component: ExchangeRate,
    layout: "/dashboard",
  },
  {
    path: "/beneficiaries",
    name: "Beneficiaries",
    component: Beneficiaries,
    layout: "/dashboard",
  },
  {
    path: "/alltransaction",
    name: "all transaction",
    component: AllTransaction,
    layout: "/dashboard",
  },
  {
    path: "/newtransaction",
    name: "New Transaction",
    component: NewTransaction,
    layout: "/dashboard",
  },
  {
    path: "/bank_account",
    name: "Bank Accounts",
    component: BankAccounts,
    layout: "/dashboard",
  },
  {
    path: "/support",
    name: "Support",
    component: Support,
    layout: "/dashboard",
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    layout: "/dashboard",
  },
];

export default dashboardRoutes;
