import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import VoterApp from './Containers/Voter.js'
import indexReducer from './Reducers/indexReducer.js'
import logger from 'redux-logger'

let store = createStore(indexReducer, applyMiddleware(logger))


  ReactDom.render(<Provider store={store}>
                        <VoterApp />
                  </Provider>, document.getElementById('container')
  )
