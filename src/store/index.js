
import { applyMiddleware, combineReducers ,createStore ,compose} from "redux";

import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import {user} from  './reducer/userReducer';
import {image} from './reducer/imageReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer  = combineReducers({
   userReducer:user,
   imageReducer:image
})
const store = createStore(
    rootReducer, compose(applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))




sagaMiddleware.run(mySaga)



export default store;
