import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import {EventAvailable} from '@material-ui/icons'

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
  },
  iconCalendar: {
    marginRight: '10px'
  }
});

const Menu = props => {
  const { classes } = props;

  return (
    <React.Fragment>
      
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <EventAvailable className={classes.iconCalendar}  fontSize="large"/>
          <Typography
            variant="h4"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            React Todo App
          </Typography>
          <Button color="inherit" href='#/todos'>Todos</Button>
          <Button color="inherit" href='#/about'>About</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default withStyles(styles)(Menu);
