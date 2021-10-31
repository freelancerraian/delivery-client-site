import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/header';
import About from './components/about/about';
import Home from './components/home/home';
import Notfound from './components/notfound/notfound';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Registration from './components/registration/registration';
import Login from './components/login/login';
import PrivetRoute from "./components/PrivetRoute/privetRoute";
import AuthProvider from "./context/AuthProvider";
import Services from './components/services/services';
import Details from './components/details/details';
import UpdateService from './components/updateservice/updateservice';
import Dashboard from './components/dashbard/dashboard';
import UpdateUser from './components/updateuser/updateuser';
import Orders from './components/orders/orders';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/details/:_id">
              <Details></Details>
            </PrivetRoute>
            <PrivetRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivetRoute>
            <PrivetRoute path="/updateservice">
              <UpdateService></UpdateService>
            </PrivetRoute>
            <PrivetRoute path="/orders">
              <Orders></Orders>
            </PrivetRoute>
            <PrivetRoute path="/orders/:id">
              <Orders></Orders>
            </PrivetRoute>
            <PrivetRoute path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </PrivetRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;