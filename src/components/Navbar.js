import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a class="navbar-brand" href="/">{props.title}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>  
      </ul>
      {/* <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}

    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" onClick={props.toggleMode} id="customSwitch1"/>
      <label class={`custom-control-label text-${props.mode == "dark"?"light":"dark"}`} for="customSwitch1">Enable Dark Mode</label>
    </div>
    </div>
  </nav>
  )
}



Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    about : PropTypes.string.isRequired
}

// Navbar.defaultProps ={
//     title : 'iCool',
//     about: 'About Us'
// }


