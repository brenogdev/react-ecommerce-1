import { CssBaseline, Typography } from "@mui/material";
import React from "react";
import { FilteredCategory, Products } from "./components";
import { Layout } from "./shared/Layout";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <FilteredCategory />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
        <Products />
      </Layout>
    </>
  );
};
