import React, { Component } from 'react'
import { Grid, withStyles, Paper } from '@material-ui/core'
import ResetFormCMS from 'ui/organisms/resetCMS'

const styles = (theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    backgroundColor: '#F3F3F4'
  },
  image: {
    backgroundImage:
      'url(https://media.emailonacid.com/wp-content/uploads/2018/05/EOA_2018GmailUpdate.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  formWrapper: {
    display: 'flex',
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class ResetPassword extends Component {
  compoentDidMount() {}

  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root}>
        <Grid
          className={classes.formWrapper}
          item
          xs={12}
          md={5}
          component={Paper}
          square
        >
          <ResetFormCMS />
        </Grid>
        <Grid item xs={false} md={7} className={classes.image} elevation={6} />
      </Grid>
    )
  }
}

export default withStyles(styles)(ResetPassword)
