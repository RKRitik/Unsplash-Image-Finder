import React from 'react';
import { useState } from 'react';
import{
  Row,
  Col,
  Image,
  Button,
  Pagination,
  Alert,Spin
} from 'antd';
import { fetchImages } from '../../store/actions';
  
import { useSelector ,useDispatch} from 'react-redux';
import Search from '../search'
import {ImageGrid} from '../ImageGrid/imagegrid';


const Home = () => {
    const dispatch = useDispatch()
    const [page,setPage] =useState(1) 
    const [page_size,setPageSize] = useState(10)
    const text = useSelector((state)=>state.imageReducer.data)
    const error = useSelector((state)=>state.imageReducer.error)
    const loading = useSelector((state)=>state.imageReducer.loading)
    const images = useSelector((state)=> state.imageReducer.results)
    const likes = useSelector((state) => state.userReducer.likes)
    //console.log(likes)
    //console.log(images)
  
   //console.log(text)
    return (
    <div data-testid= "my-test-id">
      <Row> <Search/></Row>
      {loading ? <Spin className='mt-2' size='large'/> : 
      <>
      <Row className='mt-2' >  <div >{error}</div> </Row>
      <Row>{ImageGrid(images,dispatch,likes)}</Row>
      <Row justify='center'>{error ==null && images.length>0  ? <Pagination current={page} pageSize={page_size} className ="mt-5" total={500} onChange={(page,page_size)=>{
          setPage(page)
          setPageSize(page_size)
          dispatch(fetchImages(text,page,page_size))
      }}> </Pagination> : null }
        </Row>
        </>
      }
      
      </div>)
  };


  export default Home;