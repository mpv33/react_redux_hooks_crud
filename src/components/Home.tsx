import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function Home(props: any) {


  const isAutheticated = props.s
  const setisAutheticated = props.set

  function login() {
    setisAutheticated(true);
    toast.success("User LogIn successfully!!");
    console.log("loggedInUser:" + !isAutheticated)
  }

  function logout() {
    setisAutheticated(false);
    toast.success("User LogOut successfully!!");
    console.log("loggedInUser:" + !isAutheticated)
  }
  return (
    <div>
      <h3> Hey Welcome in Redux Crud App  </h3>
      <Link to="/contact" className="col-md-2 btn btn-outline-dark my-1 ml-auto">
        Lets Move on  Contact CRUD without Api
      </Link> <br />
      <Link to="/tutorial" className="col-md-2 btn btn-outline-dark my-1 ml-auto">
        Lets Move on  Tutorial Crud with Api
      </Link> <br />

      <Link to="/unauth" className="col-md-2 btn btn-outline-dark my-1 ml-auto">
        Lets Move on  unauth Page
      </Link>  <br />
      <button onClick={login}>Login</button>
      
      <button onClick={logout}>Logout</button>

    </div>
  )
}

export default Home;
