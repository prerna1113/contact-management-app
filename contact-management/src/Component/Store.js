import {legacy_createStore} from 'redux';
import nameReducer from './nameReducer';

const reduxstore=legacy_createStore(nameReducer);

export default reduxstore;