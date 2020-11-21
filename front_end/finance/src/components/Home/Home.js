import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Home.css'

// Home page, leads to signup 
function Home() {
    return (
        <div className="home">
            Hi! 
            <br/>
            Welcome to our Financial-Buddy Web Application, 
            where you can answer a few basic questions and get some key financial insights for your future!

            <br/>
            
            <Link to='signup'>
                <Button buttonSize='btn--large' buttonColor="blue">Sign up now!</Button>
            </Link>

        </div>
    )
}

export default Home
