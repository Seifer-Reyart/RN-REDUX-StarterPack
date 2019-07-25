// Store/configureStore.js

import { createStore } from 'redux';
import {user} from './Reducers/user'

export default createStore(
    user
)