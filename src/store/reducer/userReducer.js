 import {LIKE, UNLIKE} from '../constants'

export default (
  state = {
    auth:{name:'Ritik'},
    likes:[    ]
    
  , error: null, loading: false}, 
  {error,data,type}) => {
    switch (type) {
      case LIKE:{
        //console.log(data)
        return {...state,
          likes: [...state.likes, data]
        }
      }
      
      case UNLIKE:{
        return { ...state,
          likes: state.likes.filter(img => img.id !== data),
        }
      }
      default:
        return state
    }
  }