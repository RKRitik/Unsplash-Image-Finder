
import {call,put,takeEvery} from 'redux-saga/effects'
import {GET_IMAGES } from "../constants"
import {receiveImageSuccess,receiveImageFailure} from '../actions'
import { compose } from 'redux';

async function getImages(action){
  console.log(action)
  return fetch(`https://api.unsplash.com/search/photos?query=${action.data}&client_id=oE4fPSndPS_XgGogqInl6eNhRr14Ed8HuF2YzGuirfM&page=${action.page}`,{
    method:'GET',
    headers:{
      'Accept-Version':'v1'
    }
  })
  .then(
    res=> res.json()
  ).then((res)=> {return res.results ; })
  

}
function* fetchImages(action){
  try{
  const results = yield call(getImages, action)
  
  yield put(receiveImageSuccess(results));
  }
  catch(e){
    yield console.log(e.message)
    yield put(receiveImageFailure(e.message))
  }
}

function* mySaga() {
    console.log('running')
    yield takeEvery(GET_IMAGES,fetchImages);//console.log(' saga running ');
  }
  
  export default mySaga;