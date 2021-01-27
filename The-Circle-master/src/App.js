import "./App.scss";
import Sidebar from "./components/Sidebar.component";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Overview from "./pages/Overview.pages";
import SignupFormComp from "./pages/Signup/Signup.pages";
import SigninFormComp from "./pages/Signin.pages";
import ForgetPasswordFormComp from "./pages/Forget.pages";
import FormSecondary from "./components/FormSecondary.component";
import { useEffect,useState } from "react";
import Explore from "./pages/Explore.pages";
import DashBoard from "./App";
import CrushSelection from "./components/CrushSelection/CrushSelection.component";
import FormForgotVerification from "./components/FormForgotVerification.component";
import Map from "./pages/Map.pages";
import GroupChat from "./pages/GroupChat.pages.jsx"
import {
  Reports,
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from "./pages/Reports.pages";
import Team from "./pages/Team.pages";
import UpdateUserInfo from "./components/UpdateUserInfo/UpdateUserInfo.component";
import useLocalStorage from './hooks/useLocalStorage'
function App() {
  const history = useHistory();
  const [user, setUser] = useState({});
  useEffect(() => {
    // if (
    //   !user.username &&
    //   history.location.pathname !== "/SignIn" &&
    //   history.location.pathname !== "/Forgot"
    // ) {
    //   history.push("/Signup");
    //   console.log(history);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {user ? user.username ? <Sidebar setUser={setUser} history={history} /> : null : null}
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route
          exact
          path="/Signup"
          render={() => <SignupFormComp setUser={setUser} history={history} />}
        />
        <Route path="/SignIn" render={() => <SigninFormComp history={history} setUser={setUser}/>} />

        <Route
          path="/Forgot"
          render={() => (
            <ForgetPasswordFormComp history={history} setUser={setUser} />
          )}
        />
      <Route path="/Group" render={() => (<GroupChat/>)}/>
        <Route
          path="/getInfo"
          render={() => <FormSecondary user={user} history={history} />}
        />
        <Route
          path="/getInfo"
          render={() => <FormSecondary user={user} history={history} />}
        />
        <Route path="/verify" component={FormForgotVerification} />
        {/* <Route path="/DashBoard" component={DashBoard}/> */}
        <Route path="/DashBoard" component={DashBoard}></Route>
        <Route path="/map" exact component={Map} />

        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/team" exact component={Team} />
        <Route
          path="/updateUserInfo"
          exact
          render={() => <UpdateUserInfo user={user} setUser={setUser} />}
        />
        <Route path="/" render={() => <CrushSelection user={user} />} />
      </Switch>
    </div>
  );
}

export default App;
