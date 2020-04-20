import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import dashboardReducer from 'reducer/dashboardReducer'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    list: dashboardReducer
    // rest of your reducers
  })
