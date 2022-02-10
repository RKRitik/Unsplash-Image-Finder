import{
    Row,
    Col,
    Image,
    
    
  } from 'antd';
import React from 'react'
import { LikeOutlined, LikeFilled } from '@ant-design/icons/lib/icons';

//import { useDispatch } from 'react-redux';

import { handleLike,handleUnlike } from '../../store/actions';


export const ImageGrid = (images,dispatch,likes)=> images.map(image => {
  
    //console.log(images)
    return (
      <Col key={image.id} className='mt-2'  lg={8} sm={12} xs={24}> 
    <Image  className='mb-5 mt-2' src={image.urls.raw} width={300}  height={300}/> <br/>  
    {(likes.filter(img=>img.id===image.id)).length>0  ? 
                <div data-testid="likedbutton"><LikeFilled   style={{fontSize:25}} onClick={()=>{console.log('unliked' ) ; dispatch(handleUnlike(image.id))}}width={50} height={50} /> </div>
                : <div data-testid="unlikedbutton"><LikeOutlined   style={{fontSize:25}} onClick={()=>{dispatch(handleLike(image))}} width={50} height={50}/></div>} 
        </Col>
        
    )
    
 });