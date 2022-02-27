import React from "react";
import { Route, Switch } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUps";
import FavouriatesPages from "./pages/Favouriates";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites">
          <FavouriatesPages />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
