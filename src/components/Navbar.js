import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <div>
      <nav style = {{ color: "red" }} className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/Homepage" className="navbar-brand">DAFAH</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto" >
          <li className="navbar-item" onClick={go}>
          <Link to="/AddItems" className="nav-link">Add Items</Link>
          </li>
          <li className="navbar-item" onClick={goto}>
          <Link to="/ItemsList" className="nav-link">Clothes</Link>
          </li>
          <li className="navbar-item">
          <Link to="/login" className="nav-link">Log In</Link>
          </li>
          <li className="navbar-item"onClick={logout}>
          <Link to="/logout" className="nav-link">Log out</Link>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}
 function go (){
  if (localStorage.length >= 1){
    window.location = '/AddItems'
  }
   else if (localStorage.length < 1){
    window.location = '/addUser'
  }
 }
 function goto (){
  if (localStorage.length > 1){
    window.location = '/ItemsList'
  }
   else if (localStorage.length <= 1){
    window.location = '/addUser'
  }
 }

 function logout(){
  window.localStorage.clear();
   window.location = '/Homepage'
 }