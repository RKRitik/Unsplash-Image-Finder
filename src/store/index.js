
import { applyMiddleware, combineReducers ,createStore ,compose} from "redux";

//import { persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'

import mySaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import user from  './reducer/userReducer';
import image from './reducer/imageReducer'

// const persistConfig = {
//     key: 'root9',
//     storage,
//   }
const sagaMiddleware = createSagaMiddleware()

export const rootReducer  = combineReducers({
   userReducer:user,
   imageReducer:image
})
//onst persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  rootReducer,  
  //persistedReducer, 
    {},compose(applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))




sagaMiddleware.run(mySaga)

export function createTestStore() {
  const store = createStore(
    combineReducers({
     userReducer:user,
     imageReducer:image,
    })
  );
  return store;
}

export default store;
