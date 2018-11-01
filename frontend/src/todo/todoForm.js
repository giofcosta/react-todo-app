import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeDescription, search, add, clear } from "./todoActions";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { styles } from "./styles";

const resources = {
  addOrSearch: "Search or Add",
};

class TodoForm extends React.Component {
  componentWillMount() {
    //set focus
    this.props.search();
  }

  keyHandler = e => {
    if (e.key === "Enter") {
      this.props.add(this.props.description);
    } else if (e.key === "Escape") {
      this.props.clear();
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.flexContainer}>
        <div className={classes.flexTextField}>
          <TextField
            id="standard-name"
            variant="outlined"
            fullWidth
            label={resources.addOrSearch}
            margin="normal"
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyDown={this.keyHandler}
            className={classes.textField}
          />
        </div>
        <div>
          <Button
            variant="fab"
            mini
            color="primary"
            aria-label="Add"
            onClick={() => this.props.add(this.props.description)}
          >
            <Add />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.todo });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeDescription,
      search,
      add,
      clear
    },
    dispatch
  );

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoForm)
);
