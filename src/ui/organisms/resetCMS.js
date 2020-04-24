import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form, Field } from 'react-final-form'
import { maxCharPassword } from 'const/ElementsFixedValue'
import TextFieldAdapter from 'ui/atoms/TextFieldAdapter'

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
  }
}))

const ResetFormCMS = ({ handelSubmit, submissionError, ...props }) => {
  const classes = styles(props)

  const renderformFields = [
    {
      name: 'email',
      id: 'email',
      label: 'Email Id',
      autoComplete: 'email'
    },
    {
      name: 'newPassword',
      id: 'newPassword',
      label: 'newPassword',
      autoComplete: 'newPassword',
      type: 'password',
      maxLength: maxCharPassword
    }
  ]

  return (
    <>
      <Form
        onSubmit={handelSubmit}
        initialValues={{
          email: 'ghi@gmail.com',
          newPassword: 'abc#123abc'
        }}
        validate={(values) => {
          const testEmail = /\S+@\S+\.\S+/
          const whiteSpaceRegex = /\s/g
          const testDigits = /^(?=.{6,20}$)\D*\d/
          const specialChar = /[*@!#%&()^~{}]+/
          const errors = {}
          if (!values.email) {
            errors.email = 'Email is Required'
          } else if (!testEmail.test(values.email)) {
            errors.email = 'Invaild Email Id'
          }
          if (!values.newPassword) {
            errors.newPassword = 'Password is Required'
          } else if (values.newPassword.length < 8) {
            errors.newPassword =
              'Length of newPassword should be between 8 - 16'
          } else if (values.newPassword === values.email) {
            errors.newPassword = 'Password cannot be same as Email'
          } else if (whiteSpaceRegex.test(values.newPassword)) {
            errors.newPassword = 'No white space'
          } else if (!testDigits.test(values.newPassword)) {
            errors.newPassword = 'Should consist of atleast one digit'
          } else if (!specialChar.test(values.newPassword)) {
            errors.newPassword = 'SHould have one specila character'
          }

          return errors
        }}
        render={({ handleSubmit, ...props }) => (
          <form onSubmit={handleSubmit}>
            {renderformFields.map((item) => (
              <Field
                {...item}
                key={item.id}
                variant="outlined"
                margin="normal"
                fullWidth
                component={TextFieldAdapter}
                className={classes.fieldsapcing}
              />
            ))}
            <Button
              type="submit"
              fullWidth
              size="large"
              variant="contained"
              color="primary"
              className={classes.buttonCss}
            >
              Sign In
            </Button>
          </form>
        )}
      />
    </>
  )
}

export default ResetFormCMS
