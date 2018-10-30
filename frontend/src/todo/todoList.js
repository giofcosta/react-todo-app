import React from "react";

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

const styles = () => ({
    markAsDone: {
    textDecoration: 'line-through',
    color: '#aaa'
  },
  removeButton: {
    marginRight: '30px'
  },
  list: {
    //marginRight: '100px'
  }
});

class TodoList extends React.Component {
  render() {
    const { classes, list } = this.props;

    return (
      <div>
        <List>
          {list.map((item, i) => (
            <ListItem
            className={classes.list}
              key={i}
              dense
              button
              onClick={() => this.props.handleMarkAsDone(item)}
            >
              <Checkbox checked={item.done} tabIndex={-1} disableRipple />
              <ListItemText primary={item.description} classes={{primary: item.done ? classes.markAsDone : ''}} />
              <ListItemSecondaryAction>
                <IconButton
                  aria-label="Remove"
                  className={classes.removeButton}
                  onClick={() => this.props.handleRemove(item)}
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

export default withStyles(styles)(TodoList);
