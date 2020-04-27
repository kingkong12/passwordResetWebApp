import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const styles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    backgroundColor: '#F3F3F4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkCircleIcon: {
    color: '#3C763D',
    marginBotton: () => theme.spacing(2)
  },
  wrapper: {
    padding: () => theme.spacing(4),
    maxWidth: '60%',
    '@media (max-width: 780px)': {
      width: '100%',
      padding: () => theme.spacing(0)
    }
  },
  successText: {
    color: '#3C763D',
    fontSize: '25px',
    marginBottom: () => theme.spacing(2)
  },
  iconWrapper: {
    marginBottom: '16px'
  },
  virbose: {
    fontSize: '22px'
  }
}))
const SuccessPage = (props) => {
  const classes = styles(props)

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.iconWrapper}>
          <CheckCircleIcon
            style={{ fontSize: 40 }}
            className={classes.checkCircleIcon}
          />
        </div>
        <div className={classes.successText}>Success !!</div>
        <div className={classes.virbose}>
          Congratulation, You have successfully cahnged you password. In order
          to use your app pleas navigate to login page
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
