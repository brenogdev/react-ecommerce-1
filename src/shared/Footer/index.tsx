import React from "react";
import { Box, Toolbar } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        bottom: 0,
        height: 200,
        backgroundColor: "red",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        Footer
      </Toolbar>
    </Box>
  );
};
