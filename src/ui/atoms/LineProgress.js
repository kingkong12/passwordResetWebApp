import React from 'react'
import { LinearProgress, makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: '#e8eaf6'
  },
  barColorPrimary: {
    backgroundColor: '#03a9f4'
  }
}))

const StyledLinearProgress = (props) => {
  const classes = styles(props)
  return (
    <LinearProgress
      {...props}
      classes={{
        colorPrimary: classes.colorPrimary,
        barColorPrimary: classes.barColorPrimary
      }}
    />
  )
}

export default StyledLinearProgress
