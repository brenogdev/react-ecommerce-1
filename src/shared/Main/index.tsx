import React from "react";
import { Container } from "@mui/material";

type MainProps = {
  children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
  return (
    <Container
      sx={{
        padding: 3,
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        justifyContent: "center",
        marginY: 8,
      }}
    >
      {children}
    </Container>
  );
};
