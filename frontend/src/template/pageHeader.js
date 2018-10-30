import React from "react";
import { Typography, withStyles } from "@material-ui/core";

const styles = () => ({
  content: {
    margin: "30px 30px 0 30px"
  }
});

class PageHeader extends React.Component {
  render() {
    const { classes, name, description } = this.props;

    return (
      <div className={classes.content}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="caption">{description}</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(PageHeader);
