import React from "react";
import { Grid, Paper } from "@mui/material";
import { themeState } from "./themeAtom";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./theme";
import Switch from "../components/utils/theme-switch";

const Layout = ({ children }) => {
  const currentTheme = useRecoilValue(themeState);
  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <Paper style={{ height: "100vh" }} square>
        <Grid container spacing={0}>
          <Grid container justifyContent={"flex-end"}>
            <Switch></Switch>
          </Grid>
          <Grid container>{children}</Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
