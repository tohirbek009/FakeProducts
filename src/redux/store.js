import { createStore } from "redux";
import reducer from './reducers/index';

const store = createStore(
    reducer, 
    {},
    window._REDUX_DEVTOOLS_EXTANSION_ && window._REDUX_DEVTOOLS_EXTANSION__()
    );

export default store;