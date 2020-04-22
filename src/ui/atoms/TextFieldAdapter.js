import React from 'react'
import { TextField } from '@material-ui/core'
import { maxCharTextField } from 'const/ElementsFixedValue'

const TextFieldAdapter = ({ input, type, maxLength, meta, ...rest }) => {
  // console.log('error   : : :, meta.error', meta.error)
  return (
    <TextField
      {...input}
      {...rest}
      type={input.type || 'text'}
      onChange={(value) => input.onChange(value)}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ''}
      inputProps={{ maxLength: maxLength || maxCharTextField }}
    />
  )
}

export default TextFieldAdapter
