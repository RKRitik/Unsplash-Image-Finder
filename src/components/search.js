import{
    Row,
    Col,
    Input,
    Button
  } from 'antd';
  
  import {GET_IMAGES } from '../store/constants'
  import {useState} from 'react';

  import { useDispatch } from 'react-redux';
  
  
  const Search = () => {
      const [text,setText] = useState('')

      const dispatch = useDispatch()
      return (
        <div className='mt-5'>
          <Row>
                <Input value={text} onChange={(val)=>{setText(val.target.value)}}></Input>
                <Button className="mt-2" size={"large"} type="primary" onClick={()=>{dispatch({type:GET_IMAGES,data:text,page:1})}}>Search</Button>
                </Row>
        </div>)
    };
  
  
    export default Search;