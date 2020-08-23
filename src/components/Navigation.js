import React from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

function Navigation(){
    return(
        <div>
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
        </div>
    );
}

export default Navigation;