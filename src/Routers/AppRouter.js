import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Welcome from "../components/Welcome";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import NotFoundPage from "../components/NotFoundPage";
import AddExpensePage from "../components/AddExpensePage";
import Login from "../components/Login";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

//earnings imports
import EarningsDashboard from "../earnings/components/EarningsDashboard";
import AddEarnings from "../earnings/components/AddEarnings";

export const history = createHistory();
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/welcome" component={Welcome} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <PrivateRoute
          path="/earnings/dashboard"
          component={EarningsDashboard}
        />
        <PrivateRoute path="/earnings/create" component={AddEarnings} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
