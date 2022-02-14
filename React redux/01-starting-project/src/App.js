import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) =>
    console.log(state.auth.isAthentication)
  );
  console.log(isAuth);
  return (
    <Fragment>
      <Header></Header>
      {!isAuth && <Auth></Auth>}
      {!isAuth && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
