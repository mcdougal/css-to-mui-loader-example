import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import styles from "./App.css";

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.body}>
        <Button className={classes.button}>Click Me</Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
