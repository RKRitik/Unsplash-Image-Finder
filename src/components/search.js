import { fetchImages } from '../store/actions';
import{
    Row,
    Col,
    Input,
    Button
  } from 'antd';
  import React from 'react'
  import {useState} from 'react';
  import { useDispatch } from 'react-redux';
  
  
  const Search = () => {
      const [text,setText] = useState('')

      const dispatch = useDispatch()
      return (
        
          <Row>
                <Col ><Input value={text} aria-label="search" onChange={(val)=>{setText(val.target.value)}}></Input></Col>
                <Col ><div data-testid="search-1"><Button   type="primary" onClick={()=>{if(!text.match(/^\s*$/g)) dispatch(fetchImages(text,1,10))}}>Search</Button></div></Col>
                
                
          </Row>
        )
    };
  
  
    export default Search;