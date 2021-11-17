import React, { Component } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Page2 from './views/Page2'
import Example from './views/Example'
import Page3 from './views/Page3'
import Pokemon from './views/Pokemon'

import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';




export default class App extends Component {

  constructor(){
    super();
    this.state={
      test:"This is a test",
      user:''
    }
  }

  //constructor(){
  //  super();
   // this.state= {
   //   foods: []   //object has a food key that is = to an empty list
      
  //  }
 // }
  

 // setUser = (user) =>{
 //   this.setState({user}, ()=>console.log("User is", this.state.user))   //could also be user.user but same so you can do one user.user left is referring to statement above and right is this 
 // }

  //setFoods = (food) =>{


  //}


//let x = this.state.food // x.push.(new_food)// push is append (item they typed in)// this.setState(foods:x)

  //set function to use in child func
  render() {
    return (
      <div>
        <NavBar/>
        The user is :::::: {this.state.user}
        <Routes>
          <Route path = '/' element={ <Home/>}/>
          <Route path = '/Page2' element={ <Page2 setUser={this.setUser} test = {this.state.test} />}/>
          <Route path = '/Page3' element={ <Page3 user={this.state.user}/>}/>      
          <Route path = '/Example' element={ <Example/>}/>
          <Route path = '/Pokemon'  element={ <Pokemon/>}/>
          
        </Routes>
      </div>
    )
  }
}
