import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import configureStore, { makeHistory } from 'store'
import * as serviceWorker from 'serviceWorker'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={makeHistory}>
      {/* place ConnectedRouter under Provider */}

      {/* this is a good place to have fixed footers/heasders */}
      <Switch>
        {/* Renders the first child <Route> or <Redirect> that matches the location. */}
        <Route exact path="/" render={() => <div>Hit </div>} />
        <Route path="/details" render={() => <div> Miss</div>} />
      </Switch>
    </ConnectedRouter>
  </Provider>
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
