import React from 'react'
import { TextField } from '@material-ui/core'
import { maxCharTextField } from 'const/ElementsFixedValue'

const TextFieldAdapter = ({ input, type, maxLength, meta, ...rest }) => {
  const hasError = meta?.error || {}
  return (
    <TextField
      {...input}
      {...rest}
      type={input.type || 'text'}
      onChange={(value) => input.onChange(value)}
      error={Boolean(meta.touched && Object.keys(hasError).length)}
      inputProps={{ maxLength: maxLength || maxCharTextField }}
    />
  )
}

export default TextFieldAdapter
