import React from 'react'
import { Link } from '@reach/router'

export const ComponentA = () => {
    return(
        <div><h1>From home component A</h1></div>
    )
}

export const ComponentB = () => {
    return(
        <div><h1>From home component B</h1></div>
    )
}

const Home = props =>{
    return(
        <div>
            <h1>I am Home page</h1>
            <Link to="a">component A</Link>
            <Link to="b">component B</Link>
            {props.children}
        </div>
    )
}

export default Home;