import React from 'react'
import { Typography, Button } from '@material-ui/core'
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

const ResetFormCMS = (props) => {
  const classes = styles(props)

  const renderformFields = [
    {
      name: 'email',
      id: 'email',
      label: 'Email Id',
      autoComplete: 'email'
    },
    {
      name: 'password',
      id: 'password',
      label: 'Password',
      autoComplete: 'password',
      type: 'password',
      maxLength: maxCharPassword
    }
  ]

  return (
    <div className={classes.formConatiner}>
      <Typography component="h1" variant="h5" align="center">
        Reset Your password
      </Typography>
      <Form
        onSubmit={() => {}}
        initialValues={{
          email: '',
          password: ''
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
          if (!values.password) {
            errors.password = 'Password is Required'
          } else if (values.password.length < 8) {
            errors.password = 'Length of password should be between 8 - 16'
          } else if (values.password === values.email) {
            errors.password = 'Password cannot be same as Email'
          } else if (whiteSpaceRegex.test(values.password)) {
            errors.password = 'No white space'
          } else if (!testDigits.test(values.password)) {
            errors.password = 'Should consist of atleast one digit'
          } else if (!specialChar.test(values.password)) {
            errors.password = 'SHould have one specila character'
          }

          return errors
        }}
        render={({ handleSubmit, ...props }) => (
          <form onSubmit={handleSubmit}>
            {/* {console.log('form props', props)} */}
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
    </div>
  )
}

export default ResetFormCMS
