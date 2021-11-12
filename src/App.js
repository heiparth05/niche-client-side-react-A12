import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Error from "./Error/Error";
import Home from "./HomePages/Home/Home";
import LogIn from "./LogIn/LogIn";
import Register from "./Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Explores from "./ExploreAll/Explores";
import DashHeader from "./Dashboard/DashHeader/DashHeader";
import MyOrders from "./Dashboard/MyOrders/MyOrders";
import PayNow from "./Dashboard/PayNow/PayNow";
import GiveReview from "./Dashboard/GiveReview/GiveReview";
import Checkout from "./Checkout/Checkout";

function App() {
  return (
    <>
      <div>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>

              <Route exact path="/login">
                <LogIn></LogIn>
              </Route>

              <Route exact path="/register">
                <Register></Register>
              </Route>

              <Route exact path="/explore">
                <Explores></Explores>
              </Route>

              <PrivateRoute path="/dashboard">
                <DashHeader></DashHeader>
              </PrivateRoute>

              <PrivateRoute exact path="/checkout/:helmetId">
                <Checkout></Checkout>
              </PrivateRoute>

              <PrivateRoute exact path="/myOrders">
                <MyOrders></MyOrders>
              </PrivateRoute>

              <PrivateRoute exact path="/payNow">
                <PayNow></PayNow>
              </PrivateRoute>

              <PrivateRoute exact path="/giveReview">
                <GiveReview></GiveReview>
              </PrivateRoute>

              <Route path="*">
                <Error></Error>
              </Route>
            </Switch>{" "}
            <br /> <br />
          </Router>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
