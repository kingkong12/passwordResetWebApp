import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import configureStore, { makeHistory } from 'store'
import * as serviceWorker from 'serviceWorker'
import ResetPassword from 'ui/container/resetPassword'
import SuccessPage from 'ui/organisms/successPage'

const store = configureStore()

const App = () => (
  <>
    <CssBaseline />
    <Provider store={store}>
      <ConnectedRouter history={makeHistory}>
        <Switch>
          <Route exact path="/" render={() => <ResetPassword />} />
          <Route path="/success" render={() => <SuccessPage />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </>
)

const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
