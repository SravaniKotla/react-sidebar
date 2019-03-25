import React, { Component } from 'react';
import Header from './template/Header';
import Footer from './template/Footer';
import SideBar from './template/SideBar';
import Main from './template/Main';
//To set routes
import {
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
//import components for routing
import Post from './components/posts/Post';
import PostDetail from './components/posts/PostDetail';
import Contact from './components/contact/Contact';



export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
        <Header />        
        <SideBar />
          <div className="content-wrapper">
          <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/posts" exact component={Post} />
          <Route path="/posts/:post_id" component={PostDetail} />               
          </Switch>
          </div>       
        <Footer />
        </div>
      </HashRouter>
    )
  }
}