import React from 'react'
import { TextField } from '@material-ui/core'

const TextFieldAdapter = ({ input, type, maxLength = 40, meta, ...rest }) => {
  return (
    <TextField
      {...input}
      {...rest}
      type={input.type || 'text'}
      onChange={(value) => input.onChange(value)}
      error={(meta.touched && !input.value) || ''}
      helperText={meta.touched && !input.value ? meta.error : ''}
      inputProps={{ maxLength }}
    />
  )
}

export default TextFieldAdapter
