import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: "relative"
  },
  toolbarTitle: {
    flex: 1,
    textAlign: 'left'
  }
});

const Menu = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      
      <AppBar position="static" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            React Todo App
          </Typography>
          <Button href='#/todos'>Todos</Button>
          <Button href='#/about'>About</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(Menu);
