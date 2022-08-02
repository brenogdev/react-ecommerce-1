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
        gap: "1rem",
        justifyContent: "center",
        marginTop: 16,
        maxWidth: "100%",
      }}
    >
      {children}
    </Container>
  );
};
