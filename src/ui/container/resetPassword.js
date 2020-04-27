import React, { Component } from 'react'
import { Grid, withStyles, Paper } from '@material-ui/core'
import propTypes from 'prop-types'
import ResetFormCMS from 'ui/organisms/resetCMS'
import axios from 'axios'
import _ from 'lodash'
import updateUserList from 'actions'
import { connect } from 'react-redux'
import basceApiUrl from '../../services/api'
import { push } from 'connected-react-router'
import { Typography } from '@material-ui/core'
import { maxCharPassword } from 'const/ElementsFixedValue'
import StyledLinearProgress from 'ui/atoms/LineProgress'
import LinearProgress from '@material-ui/core/LinearProgress'
const formFields = [
  {
    name: 'email',
    id: 'email',
    label: 'Email Id',
    autoComplete: 'email'
  },
  {
    name: 'newPassword',
    id: 'newPassword',
    label: 'New Password',
    autoComplete: 'newPassword',
    type: 'password',
    maxLength: maxCharPassword
  }
]

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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formConatiner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: () => theme.spacing(4),
    maxWidth: () => theme.spacing(55)
  },
  errorBlock: {
    width: '100%',
    textAlign: 'center',
    marginTop: '1rem',
    backgroundColor: '#FFCCBA',
    padding: '5px'
  }
})

class ResetPassword extends Component {
  constructor() {
    super()
    this.state = {
      error: '',
      submit: false
    }
  }
  componentDidMount() {
    const { addUsersToRedux } = this.props
    axios
      .get(`${basceApiUrl}/users`)
      .then((response) => {
        this.setState({
          error: ''
        })
        addUsersToRedux(response.data)
      })
      .catch((error) => {
        console.log('Error in connectin back end ', error)
      })
  }

  handelFormSubmit = (value, FORM_ERROR) => {
    this.setState({ submit: true })
    const { email, newPassword } = value
    const setErrorState = () =>
      this.setState({ error: 'Incorrect UserId or Password' })

    let { users } = this.props

    const { push: routerPush } = this.props
    let foundUser = users.find((item) => item.email === email) || {}

    if (Object.keys(foundUser).length > 0) {
      this.setState({ error: '' })

      if (
        foundUser.password === newPassword ||
        foundUser.previousPassword.find(
          (passwordList) => passwordList === newPassword
        )
      ) {
        this.setState({
          error: 'newPassword cannot be same as last 5 password'
        })
      } else {
        let { previousPassword } = foundUser
        previousPassword.unshift(foundUser.password)
        let updatedUserPassword = {
          ...foundUser,
          password: newPassword,
          previousPassword: _.head(_.chunk(previousPassword, 4))
        }

        axios
          .put(`${basceApiUrl}/users/${updatedUserPassword.id}`, {
            email: updatedUserPassword.email,
            password: updatedUserPassword.password,
            previousPassword: updatedUserPassword.previousPassword
          })
          .then((resp) => {
            this.setState({ submit: false })
            updateUserList(resp.data)
            routerPush({
              pathname: '/success',
              state: { mailId: updatedUserPassword.email }
            })
          })
          .catch((error) => {
            this.setState({ submit: false })
            console.log('Filed to update data ', error)
          })
      }
    } else {
      setErrorState()
    }
  }

  render() {
    const { classes } = this.props

    return (
      <main>
        {this.state.submit && <LinearProgress style={{ color: '#3F51B5' }} />}
        <Grid container className={classes.root}>
          <Grid
            className={classes.formWrapper}
            item
            xs={12}
            md={5}
            component={Paper}
            square
          >
            <div className={classes.formConatiner}>
              <Typography component="h1" variant="h5" align="center">
                Reset Your password
              </Typography>
              {this.state.error && (
                <div className={classes.errorBlock}>{this.state.error}</div>
              )}
              <ResetFormCMS
                handelSubmit={this.handelFormSubmit}
                renderformFields={formFields}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={false}
            md={7}
            className={classes.image}
            elevation={6}
          />
        </Grid>
      </main>
    )
  }
}
ResetPassword.propTypes = {
  error: propTypes.string,
  submit: propTypes.bool,
  push: propTypes.func.isRequired,
  addUsersToRedux: propTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { users: state.userList.users, router: state.router }
}

export default connect(mapStateToProps, {
  addUsersToRedux: updateUserList,
  push
})(withStyles(styles)(ResetPassword))
