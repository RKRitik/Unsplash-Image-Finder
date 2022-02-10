
import {call,put,takeEvery} from 'redux-saga/effects'
import {GET_IMAGES } from "../constants"
import {receiveImageSuccess,receiveImageFailure} from '../actions'

const API_KEY = require("../../config").API_KEY
export async function getImages(action){
  //console.log(action)
  return fetch(`https://api.unsplash.com/search/photos?query=${action.data}&client_id=${API_KEY}&page=${action.page}&per_page=${action.page_size}`,{
    method:'GET',
    headers:{
      'Accept-Version':'v1'
    }
  })
  .then(
    res=> res.json()
  ).then((res)=> {return res.results ; })
  

}
export function* fetchImagesSaga(action){
  console.log(action)
  try{
  const results = yield call(getImages, action)//call is 'blocking'
  if(results.length>0)
  yield put(receiveImageSuccess(results));
  else{
    yield put(receiveImageFailure('No results found')) // put is 'non blocking'
  }
  }
  catch(e){
    yield console.log(e.message)
    yield put(receiveImageFailure(e.message))
  }
}

function* mySaga() {
    yield takeEvery(GET_IMAGES,fetchImagesSaga);//console.log(' saga running ');
  }
  
  export default mySaga;