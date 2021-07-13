import React from 'react'
import { Link } from "react-router-dom";

function UnProtected() {
    return (
        <div>
            <h1> Hey Iam Unauth user page    </h1>  <br></br>
            <Link to="/" className="col-md-2 btn btn-outline-dark my-5 ml-auto">
                Lets Move on Home Page
            </Link>
        </div>
    )
}

export default UnProtected
