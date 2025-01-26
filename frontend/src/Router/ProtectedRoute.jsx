import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// ProtectedRoute checks if the user is logged in before rendering the element
const ProtectedRoute = ({ element, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);  // Get auth state from Redux

  return (
    <Route
      {...rest}
      element={isLoggedIn ? element : <Navigate to="/signin" />} // Redirect to sign-in if not logged in
    />
  );
};

export default ProtectedRoute;
