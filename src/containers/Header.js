import { useState } from "react";
import { Menu, Affix } from "antd";
import { Link ,useLocation} from "react-router-dom";

import { HomeFilled , ProfileFilled } from "@ant-design/icons/lib/icons";
const Navigation = () => {
    const location= useLocation()
    const [state,setState]=useState(location.pathname.split('/')[1])
    const  handleClick = e => {setState(e.key)};
    console.log(location)
    return ( 
     
      <div >
      <Affix offsetTop={0}> 
      <Menu  theme="dark" onClick={handleClick} selectedKeys={[state]} mode="horizontal">
        
        <Menu.Item key="home" icon={<HomeFilled/>}>

        <Link to="/home"> 
            Home
          </Link>
        </Menu.Item>
        
        
        <Menu.Item key="profile" icon={<ProfileFilled/>} >
        <Link to="/profile" >
            Profile
          </Link>
        </Menu.Item>
        
        
        
      </Menu>
      </Affix>
    </div>
        
    
      )
  };


  export default Navigation;