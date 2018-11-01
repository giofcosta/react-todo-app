import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { remove, complete } from "./todoActions";
import { styles } from "./styles";

import {
  List,
  ListItem,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

class TodoList extends React.Component {
  render() {
    const { classes, filteredList } = this.props;

    return (
      <div>
        <List>
          {filteredList.map((item, i) => (
            <ListItem
              key={i}
              dense
              button
              onClick={() => this.props.complete(item)}
            >
              <Checkbox checked={item.done} tabIndex={-1} disableRipple />
              <ListItemText
                primary={item.description}
                classes={{ primary: item.done ? classes.markAsDone : "" }}
              />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Remove"
                  className={classes.removeButton}
                  onClick={() => this.props.remove(item)}
                >
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.todo.list,
  filteredList: state.todo.filteredList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      remove,
      complete
    },
    dispatch
  );

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList)
);
