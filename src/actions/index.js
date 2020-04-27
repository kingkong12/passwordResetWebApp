import addUsersList from 'const/actionType'

const updateUserList = (payload) => {
  return {
    type: addUsersList,
    payload
  }
}

export default updateUserList
