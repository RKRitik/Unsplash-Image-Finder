import{
    Row,
    Col,
    Image,
    
    
  } from 'antd';

  import { LikeOutlined, LikeFilled } from '@ant-design/icons/lib/icons';



import { handleLike,handleUnlike } from '../store/actions';


export const imagesTile = (images,dispatch,likes)=> images.map(image => {
   
  return likes===undefined ? //likes undefined means render in profile page
  <> <Col lg={8} sm={12} xs={24}><Image key={image.id} className='mb-5 mt-2' src={image.url} width={300}  height={300}/> <br/>  <LikeFilled style={{fontSize:20}} onClick={()=>{dispatch(handleUnlike(image.id))}}width={50} height={50} /> </Col></>
    :
    <>  <Col lg={8} sm={12} xs={24}> <Image key={image.id} className='mb-5 mt-2' src={image.urls.small} width={300}  height={300}/> <br/>  {(likes.filter(img=>img.id===image.id)).length>0  ? <LikeFilled style={{fontSize:20}} onClick={()=>{dispatch(handleUnlike(image.id))}}width={50} height={50} /> : <LikeOutlined style={{fontSize:20}} onClick={()=>{dispatch(handleLike(image.id,image.urls.small))}} width={50} height={50}/>} </Col></>
    
    
 });