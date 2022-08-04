import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function FilteredCategory() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab label="Todas" sx={{ textTransform: "capitalize" }} />
        <Tab label="Categoria 1" sx={{ textTransform: "capitalize" }} />
        <Tab label="Categoria 2" sx={{ textTransform: "capitalize" }} />
        <Tab label="Categoria 3" sx={{ textTransform: "capitalize" }} />
        <Tab label="Categoria 4" sx={{ textTransform: "capitalize" }} />
        <Tab label="Categoria 5" sx={{ textTransform: "capitalize" }} />
      </Tabs>
    </Box>
  );
}
