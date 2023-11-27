import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouter = ({ isAuthentication }) => {
  return <div>{isAuthentication ? <Outlet /> : <Navigate to="/login" />}</div>;
};

//Validación de tipos de datos con PropTypes
PrivateRouter.propTypes = {
  isAuthentication: PropTypes.bool.isRequired,
};

export default PrivateRouter;
