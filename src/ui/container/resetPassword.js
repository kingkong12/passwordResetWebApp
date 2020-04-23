import React, { Component } from 'react'
import { Grid, withStyles, Paper } from '@material-ui/core'
import ResetFormCMS from 'ui/organisms/resetCMS'
import axios from 'axios'
import updateUserList from 'actions'
import { connect } from 'react-redux'
import basceApiUrl from '../../services/api'

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
  componentDidMount() {
    const { addUsersToRedux } = this.props
    axios
      .get(`${basceApiUrl}/users`)
      .then((response) => {
        addUsersToRedux(response.data)
        // console.log('response ', response.data)
        // ToDO : dispacth action and updat redux
      })
      .catch((error) => {
        // ToDO :dispatch action to display error
        console.log('Network Error', error)
      })
  }

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

const mapStateToProps = (state) => {
  return { users: state.userList }
}

export default connect(mapStateToProps, { addUsersToRedux: updateUserList })(
  withStyles(styles)(ResetPassword)
)
