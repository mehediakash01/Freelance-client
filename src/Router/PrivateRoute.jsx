import { Navigate, useLocation } from "react-router";
import Loading from "../Pages/Loading";
import { useContext } from "react";
import { AuthContext } from "../Utilities/Auth/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate state={location.pathname} to={"/login"} replace></Navigate>
    );
  }
};

export default PrivateRoute;
