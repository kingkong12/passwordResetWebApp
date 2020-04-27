/* eslint-disable consistent-return */
import errorMessages from 'const/errorMessages'

const testEmail = /\S+@\S+\.\S+/
const whiteSpaceRegex = /\s/
const testDigits = /^(?=.{1,20}$)\D*\d/
const specialChar = /[*@!#%&()^~{}]+/

const fieldValidations = {
  email: (value) => {
    if (!value) return errorMessages.required
    if (!testEmail.test(value)) return errorMessages.invalidEmail
  },
  password: (values) => {
    const { email, newPassword } = values
    const errorObj = {}
    const lengthOfPassword = newPassword?.length || 0

    if (lengthOfPassword < 8) {
      errorObj.passwordLength = errorMessages.passwordLength
    }
    if (whiteSpaceRegex.test(newPassword) || lengthOfPassword === 0) {
      errorObj.whiteSpace = errorMessages.whiteSpace
    }
    if (!testDigits.test(newPassword)) {
      errorObj.consistDigit = errorMessages.consistDigit
    }
    if (!specialChar.test(newPassword)) {
      errorObj.specialChar = errorMessages.specialChar
    }
    if (values.email === values.newPassword || lengthOfPassword === 0) {
      errorObj.sameUidandPassword = errorMessages.sameUidandPassword
    }
    return errorObj
  }
}

export default fieldValidations
