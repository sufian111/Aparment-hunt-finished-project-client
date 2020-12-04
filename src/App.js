import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Component/HomePage/Home/Home";
import { createContext } from "react";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    displayName: "",
    email: "",
    photo: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <h1>page not found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
