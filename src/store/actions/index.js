import { GET_IMAGES, RECEIVE_IMAGES_SUCCESS, LIKE,UNLIKE,RECEIVE_IMAGES_FAILURE } from '../constants'

export const fetchImages = (text,page,page_size) => ({
  type: GET_IMAGES,
  data:text,
  page,
  page_size
});

export const receiveImageSuccess = (data) => ({
  type: RECEIVE_IMAGES_SUCCESS,
  data:data,
});

export const receiveImageFailure = (error) => ({
  type: RECEIVE_IMAGES_FAILURE,
  error,
});

export const handleLike = (img)=>({
 type:LIKE,
  data:img
})
export const handleUnlike = (id)=>({
type:UNLIKE,
data:id

})
