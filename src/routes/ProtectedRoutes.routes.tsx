import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Layout } from "../shared/Layout";
import { getUserLocalStorage } from "../utils/userLocalStorage";

export const ProtectedRoutes = ({
  children,
  hasPermission,
}: {
  children: React.ReactNode;
  hasPermission: boolean;
}) => {
  const user = getUserLocalStorage();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return <>{hasPermission && <Layout>{children}</Layout>}</>;
};
