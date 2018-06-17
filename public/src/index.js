import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'

import reducers from './reducers'
const store = createStore(reducers)

const app = document.querySelector('#app')

render(
	<Provider store={store}>
		<App />
	</Provider>,
	app
)