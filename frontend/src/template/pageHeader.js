import React from "react";
import { Typography } from "@material-ui/core";

export default props => (
  <React.Fragment>
    <Typography variant="h3">{props.name}</Typography>
    <Typography variant="subtitle1">{props.description}</Typography>
  </React.Fragment>
);
