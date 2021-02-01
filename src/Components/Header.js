import React from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Box, Typography, Button, IconButton, Link } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(1),
      fontSize: 17,
      fontWeight: 400,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <Box display="flex" bgcolor="info.main" p={2} alignItems="center">
      <Typography>MUSIC APP</Typography>

      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href="/"
      >
        Search
      </IconButton>

      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
        href="/play"
      >
        Play
      </IconButton>
      <Box flexGrow={2} textAlign="right">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
