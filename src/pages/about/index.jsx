import React from 'react'
import { Router, Link } from '@reach/router'

export const ComponentAboutA = () => {
    return (
        <div><h1>From about component A</h1></div>
    )
}

export const ComponentAboutB = () => {
    return (
        <div><h1>From about component B</h1></div>
    )
}

const About = (props) => {
    return (
        <div>
            <h1>I am About page</h1>
            <Link to="c">component A</Link>
            <Link to="d">component B</Link>
            <Router>
                <ComponentAboutA default />
                <ComponentAboutB path="d" />
            </Router>
            {props.children}
        </div>
    )
}

export default About;