import React from "react";
import { Box } from "@mui/material";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};
