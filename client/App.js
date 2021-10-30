import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFond from "./components/NotFound/NotFond";
import MyEvents from "./components/MyEvents/MyEvents";
import ManageEvents from "./components/ManageEvents/ManageEvents";
import Login from "./components/Login/Login/Login";
import Header from "./components/Shared/Header/Header";
import EventDetails from "./components/EventDetails/EventDetails";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import AddEvent from "./components/AddEvent/AddEvent";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/myEvents">
              <MyEvents></MyEvents>
            </Route>
            <Route path="/manageEvents">
              <ManageEvents></ManageEvents>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/eventDetails/:eventId">
              <EventDetails></EventDetails>
            </PrivateRoute>
            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>
            <Route path="*">
              <NotFond></NotFond>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
