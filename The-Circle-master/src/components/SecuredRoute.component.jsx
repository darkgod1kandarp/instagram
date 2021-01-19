import { Route, Redirect } from "react-router-dom";
import UseForm2 from "../hooks/useSignIn.hooks.";

function SecuredRoute(props) {
  const { a } = UseForm2();

  return (
    <Route
      path={props.path}
      render={(data) =>
        a ? (
          <props.component {...data}></props.component>
        ) : (
          <Redirect to={{ pathname: "/" }}></Redirect>
        )
      }
    ></Route>
  );
}
export default SecuredRoute;
