import React from 'react'
import propTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'
import DoneIcon from '@material-ui/icons/Done'

const styles = makeStyles((theme) => ({
  '@keyframes blinker': {
    from: { maxHeight: '0px' },
    to: { maxHeight: '300px' }
  },
  wrapper: {
    border: '0px ',
    backgroundColor: '#F4F4F4',
    padding: () => theme.spacing(2),
    borderRadius: '5px',
    overflow: 'hidden',
    animationName: '$blinker',
    animationDuration: '1s',
    animationTimingFunction: 'ease-in',
    '& div:not(:last-child)': {
      marginBottom: () => theme.spacing(2)
    }
  },
  rules: {
    fontSize: '16px',
    display: 'flex',
    verticalAlign: 'bottom'
  },
  clearIcon: {
    position: 'relative',
    top: '6px',
    marginRight: '8px',
    color: 'red'
  },
  success: {
    position: 'relative',
    top: '6px',
    marginRight: '8px',
    color: 'green'
  }
}))

const PasswordRuleSet = ({ errors, renderRules, ...props }) => {
  const classes = styles(props)
  const errorsAryLIst = Object.values(errors)

  const ruleSet = renderRules.map((ary) => {
    const fieldError =
      !!errorsAryLIst.find((element) => element === ary.verbos) || false
    return {
      verbos: ary.verbos,
      fieldError
    }
  })
  return (
    <div className={classes.wrapper} {...props}>
      {ruleSet.map((item) => (
        <div key={item.verbos} className={classes.rules}>
          <span>
            {item.fieldError ? (
              <ClearIcon className={classes.clearIcon} />
            ) : (
              <DoneIcon className={classes.success} />
            )}
          </span>
          {item.verbos}
        </div>
      ))}
    </div>
  )
}

PasswordRuleSet.propTypes = {
  errors: propTypes.instanceOf(Object),
  renderRules: propTypes.instanceOf(Array).isRequired
}

export default PasswordRuleSet
