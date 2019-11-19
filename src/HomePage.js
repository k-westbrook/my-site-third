import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#37474f",
    height: "100%"
  }
}


class HomePage extends Component {



  render() {
    const { classes } = this.props;
    return (
      <div >
        <h1>home
      </h1>
      </div>
    )
  }


}


export default withStyles(styles)(HomePage)
