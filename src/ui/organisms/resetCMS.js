import React from 'react'
import propTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form, Field } from 'react-final-form'
import TextFieldAdapter from 'ui/atoms/TextFieldAdapter'
import fieldValidations from 'helper/fieldValidations'
import PasswordRuleSet from 'ui/organisms/passworRuleSet'
import errorMessages from 'const/errorMessages'

const styles = makeStyles((theme) => ({
  formConatiner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: () => theme.spacing(4),
    maxWidth: () => theme.spacing(55)
  },
  fieldsapcing: {
    marginBottom: () => theme.spacing(2)
  },
  buttonCss: {
    margin: () => `${theme.spacing(2)}px 0px`
  },
  submitbtn: {
    backgroundColor: '#3584C1',
    color: '#ffffff'
  }
}))

const ResetFormCMS = ({
  handelSubmit,
  renderformFields = [],
  submissionError,
  ...props
}) => {
  const classes = styles(props)
  const renderRules = [
    { rule: 'passwordLength', verbos: errorMessages.passwordLength },
    { rule: 'whiteSpace', verbos: errorMessages.whiteSpace },
    { rule: 'consistDigit', verbos: errorMessages.consistDigit },
    { rule: 'specialChar', verbos: errorMessages.specialChar },
    { rule: 'sameUidandPassword', verbos: errorMessages.sameUidandPassword }
  ]
  return (
    <>
      <Form
        onSubmit={handelSubmit}
        initialValues={{
          email: '',
          newPassword: ''
        }}
        validate={(values) => {
          const errors = {}
          errors.email = fieldValidations.email(values.email)
          errors.newPassword = fieldValidations.password(values)
          return errors
        }}
        render={({
          handleSubmit,
          errors,
          visited,
          submitting,
          pristine,
          form: internalForm,
          ...props
        }) => (
          <form onSubmit={handleSubmit}>
            {renderformFields.map((item) => (
              <Field
                {...item}
                key={item.id}
                variant="outlined"
                margin="normal"
                // required
                fullWidth
                component={TextFieldAdapter}
                className={classes.fieldsapcing}
              />
            ))}
            {visited.newPassword && (
              <PasswordRuleSet
                errors={errors.newPassword}
                renderRules={renderRules}
              />
            )}
            <div className={classes.buttonCss}>
              <Button
                type="submit"
                fullWidth
                size="large"
                variant="contained"
                className={classes.submitbtn}
                // color="#307CB6"
              >
                Submit
              </Button>
              <Button
                type="reset"
                fullWidth
                size="large"
                color="primary"
                onClick={internalForm.reset}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      />
    </>
  )
}
ResetFormCMS.propTypes = {
  handelSubmit: propTypes.func.isRequired,
  renderformFields: propTypes.instanceOf(Array),
  submissionError: propTypes.string
}
export default ResetFormCMS
