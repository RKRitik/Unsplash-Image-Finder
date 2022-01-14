import{
  Row,
  Col,
  Image,
  Button,
  Pagination,
  Alert
} from 'antd';
import { GET_IMAGES } from '../store/constants';
import { useSelector ,useDispatch} from 'react-redux';
import Search from './search'
import {imagesTile} from './imagegrid';

const Home = () => {
    const dispatch = useDispatch()
    const text = useSelector((state)=>state.imageReducer.data)
    const error = useSelector((state)=>state.imageReducer.error)
    const images = useSelector((state)=> state.imageReducer.results)
    const likes = useSelector((state) => state.userReducer.likes)
    console.log(images,likes)
  
   console.log(text)
    return (<div>
      <Row> <Search/></Row>
      <Row>{error && <Alert className ="mt-5"  message={error} type={'error'}/> }</Row>
      <Row>{imagesTile(images,dispatch,likes)}</Row>
      <Row><Pagination className ="mt-5" total={500} onChange={(page)=>{
        dispatch({type:GET_IMAGES,data:text,page})
      }}> </Pagination></Row>
      </div>)
  };


  export default Home;