import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

const styles = theme => ({
  flexContainer: {
    display: "flex",
    marginRight: '30px',
    "& >div": {
      color: "white",
      margin: "10px",
      textAlign: "center",
      lineHeight: "75px",
      fontSize: "30px",
    }
  },
  flexTextField: {
    flexGrow: 8,
    paddingLeft: '20px'
  },
  button: {}
});

function TodoForm(props) {
  const { classes } = props;
  return (
    <div className={classes.flexContainer}>
      <div className={classes.flexTextField}>
        <TextField
          id="standard-name"
          variant="outlined"
          fullWidth
          label="Name"
          margin="normal"
          value={props.description}
          onChange={props.handleChange}
          className={classes.textField}
        />
      </div>
      <div>
        <Button
          variant="fab"
          mini
          color="primary"
          aria-label="Add"
          className={classes.button}
          onClick={props.handleAdd}
        >
          <Add />
        </Button>
      </div>
    </div>
  );
}

export default withStyles(styles)(TodoForm);
