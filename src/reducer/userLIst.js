import addUsersList from 'const/actionType'

const initialVlaue = {
  users: []
}

const userListreducer = (state = initialVlaue, action) => {
  switch (action.type) {
    case addUsersList:
      return { ...state, users: action.payload }
    default:
      return { ...state }
  }
}

export default userListreducer
