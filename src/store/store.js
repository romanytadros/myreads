import reducer from './reducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools());

export default store;