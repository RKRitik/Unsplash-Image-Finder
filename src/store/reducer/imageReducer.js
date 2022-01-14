import {GET_IMAGES, RECEIVE_IMAGES_FAILURE,RECEIVE_IMAGES_SUCCESS} from '../constants'

export default (
  state = {
    results:[]
    // results:[
    // {id:1,url:'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixid=MnwyOTA4Mzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0fGVufDB8fHx8MTY0MjEzOTU4MQ&ixlib=rb-1.2.1'},
    // {id:2,url:'https://images.unsplash.com/photo-1524592714635-d77511a4834d?ixid=MnwyOTA4Mzd8MHwxfHNlYXJjaHwyfHxhaXJwb3J0fGVufDB8fHx8MTY0MjEzOTU4MQ&ixlib=rb-1.2.1'},
    // {id:3,url:'https://images.unsplash.com/photo-1561131668-f63504fc549d?ixid=MnwyOTA4Mzd8MHwxfHNlYXJjaHwzfHxhaXJwb3J0fGVufDB8fHx8MTY0MjEzOTU4MQ&ixlib=rb-1.2.1'},
    // {id:4,url:'https://images.unsplash.com/photo-1566566220367-af…aXJwb3J0fGVufDB8fHx8MTY0MjEzOTU4MQ&ixlib=rb-1.2.1'},

  
  , error: null, loading: false}, 
  {error,data,type}) => {
    switch (type) {
      case RECEIVE_IMAGES_SUCCESS:
        console.log(data)
      return{
        ...state, results:data, error: null, loading: false 
      }
      case RECEIVE_IMAGES_FAILURE:
       
      return{
          ...state,loading:false,results:[],error
      }
      case GET_IMAGES:
        return{
          ...state,loading:true,error:null,data
        }
      
      default:
        return state
    }
  }