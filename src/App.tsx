import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Api } from "./services/api";
import { AuthProvider } from "./contexts/AuthProvider";
import Login from "./pages/Login";
import { ProtectedRoutes } from "./routes/ProtectedRoutes.routes";
import Home from "./pages/Home";
import { theme } from "./styles/theme";

const fetchData = async () => {
  const response = await Api.get("products");

  console.log(response.data);
};

export const App = () => {
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes hasPermission={true}>
                  <Home />
                </ProtectedRoutes>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
};
