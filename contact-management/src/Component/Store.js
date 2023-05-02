import {legacy_createStore,applyMiddleware} from 'redux';
import nameReducer from './nameReducer';
import logger from 'redux-logger'

const reduxstore=legacy_createStore(nameReducer);

export default reduxstore;