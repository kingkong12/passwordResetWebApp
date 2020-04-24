import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form, Field } from 'react-final-form'
import TextFieldAdapter from 'ui/atoms/TextFieldAdapter'
import fieldValidations from 'helper/fieldValidations'

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

const ResetFormCMS = ({
  handelSubmit,
  renderformFields = [],
  submissionError,
  ...props
}) => {
  const classes = styles(props)

  return (
    <>
      <Form
        onSubmit={handelSubmit}
        initialValues={{
          email: 'ghi@gmail.com',
          newPassword: 'abc#123abc'
        }}
        validate={(values) => {
          const errors = {}
          errors.email = fieldValidations.email(values.email)
          errors.newPassword = fieldValidations.password(values)
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
