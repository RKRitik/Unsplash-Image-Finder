import{
  Row,
  Col,
  Image,
  Button,
  
} from 'antd';

import { useSelector ,useDispatch} from 'react-redux';



import {imagesTile} from './imagegrid';

const Profile = () => {
  const dispatch = useDispatch()
  const images  = useSelector((state)=> state.userReducer.likes)
  const name = useSelector((state)=> {console.log(state.userReducer) ; return state.userReducer.auth.name } )
  
  return <div>
      <Row>Profile</Row>
      <Row>Name : {name}</Row>
      <Row>User Liked Images : </Row>
      <Row>{imagesTile(images,dispatch)}</Row>
      
      </div>
  };


  export default Profile;