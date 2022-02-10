import React from 'react'
import { Provider }               from 'react-redux';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";
//import { persistStore} from 'redux-persist'
//import { PersistGate } from 'redux-persist/integration/react'
import store from './store'
import Nav from './containers/Header.js';
import Main from './containers/Content.js'
import 'bootstrap/dist/css/bootstrap.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

//let persistor = persistStore(store)


export default function App() {
  return (
    <Provider store={store}>
       {/* <PersistGate  persistor={persistor}> */}
      <Router>
          <Layout className="layout ">
            <Header>
              <Nav/>
            </Header>

            <Content style={{ padding: '50px 50px' }}>
                <Main/>
            </Content>
          </Layout>
      </Router>
      {/* </PersistGate> */}
    </Provider>
  )
};

