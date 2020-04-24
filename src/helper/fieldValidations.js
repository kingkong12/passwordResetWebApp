/* eslint-disable consistent-return */
import errorMessages from 'const/errorMessages'

const testEmail = /\S+@\S+\.\S+/
const whiteSpaceRegex = /\s/g
const testDigits = /^(?=.{6,20}$)\D*\d/
const specialChar = /[*@!#%&()^~{}]+/

const fieldValidations = {
  email: (value) => {
    if (!value) return errorMessages.required
    if (!testEmail.test(value)) return errorMessages.invalidEmail
  },
  password: (values) => {
    const { email, newPassword } = values

    if (!newPassword) return errorMessages.required
    if (newPassword.length < 8) return errorMessages.passwordLength
    if (email === newPassword) return errorMessages.sameUidandPassword
    if (whiteSpaceRegex.test(newPassword)) return errorMessages.whiteSpace
    if (!testDigits.test(newPassword)) return errorMessages.consistDigits
    if (!specialChar.test(newPassword)) return errorMessages.specialChar
  }
}

export default fieldValidations
