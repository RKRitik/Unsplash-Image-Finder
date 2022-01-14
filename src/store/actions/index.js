import { GET_IMAGES, RECEIVE_IMAGES_SUCCESS, LIKE,UNLIKE,RECEIVE_IMAGES_FAILURE, SET_IMAGES } from '../constants'

export const fetchImages = () => ({
  type: GET_IMAGES,
});

export const receiveImageSuccess = (data) => ({
  type: RECEIVE_IMAGES_SUCCESS,
  data:data,
});

export const receiveImageFailure = (error) => ({
  type: RECEIVE_IMAGES_FAILURE,
  error,
});

export const handleLike = (id,url)=>({
 type:LIKE,
  data:{id,url}
})
export const handleUnlike = (id)=>({
type:UNLIKE,
data:id

})
