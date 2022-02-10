import{
  Row,
 
} from 'antd';

import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';



import {ImageGrid} from '../ImageGrid/imagegrid';

const Profile = () => {
  const dispatch = useDispatch()
  const images  = useSelector((state)=> state.userReducer.likes)
  const name = useSelector((state)=> { return state.userReducer.auth.name } )
  //console.log('images : ',images)
  return <div>
      <Row justify='center'><strong>Profile</strong></Row>
      <Row justify='center'>Name : <strong>{name}</strong></Row>

      <Row >Liked Images : </Row>
      <Row>{ImageGrid(images,dispatch,images)}</Row>
      
      </div>
  };


  export default Profile;