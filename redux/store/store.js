import { createStore } from 'redux'
import reducer from '../reducers/index'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

export default store; 



