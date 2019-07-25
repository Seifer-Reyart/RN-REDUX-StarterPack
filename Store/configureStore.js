// Store/configureStore.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise'

import {user} from './Reducers/user'

export default createStore(
    user,
    applyMiddleware(promise, thunk)
)