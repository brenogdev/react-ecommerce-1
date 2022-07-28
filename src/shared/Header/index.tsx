import { Home, Settings, ShoppingBasketOutlined } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";

export const Header: React.FunctionComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={1} position="fixed" color="inherit">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <Home />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <IconButton>
              <ShoppingBasketOutlined />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
