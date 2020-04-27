import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userListreducer from './userLIst'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    userList: userListreducer
  })
