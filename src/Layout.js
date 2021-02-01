import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Components/Header";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    minHeight: "100vh",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Grid>{children}</Grid>
    </div>
  );
};

export default Layout;