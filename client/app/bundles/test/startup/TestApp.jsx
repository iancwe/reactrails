import React from 'react'
import { Provider } from 'react-redux'
import {connectRouter} from 'react-router-redux'
import store, {history} from '../store'
import App from '../containers/app'

// THIS IS THE INDEX.JS FOR THE PREVIOUS PROJECT//
// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext

const target = document.querySelector('#root')

const TestApp = (props, _railsContext) => (
  <Provider store={store}>
    <connectRouter history={history}>
      <div>
        <App />
      </div>
    </connectRouter>
  </Provider>,
  target
)

export default TestApp
