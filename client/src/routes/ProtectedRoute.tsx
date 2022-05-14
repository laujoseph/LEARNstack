import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context";

export const ProtectedRoute = () => {
  const [state, setState] = useContext(UserContext);

  if (state.loading) return <div>loading....</div>;

  // if user is logged in, we return outlet.
  // outlet is a component that will return the CHILD inside the component with matching url
  return state.data ? <Outlet /> : <Navigate to="/" />;
};
