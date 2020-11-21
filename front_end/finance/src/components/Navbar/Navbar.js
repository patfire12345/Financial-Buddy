import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import Register from '../Register/Register'
import './Navbar.css'

// Navbar that keeps all of the pages
function Navbar() {
    return (
        <div className='nav'>
            <div className='regular'>
                <Link to='/'>
                    <Button buttonColor = 'blue'>
                        Home
                    </Button>
                </Link>
                
                <Link to='/about'>
                    <Button buttonColor = 'red'>
                        About Us
                    </Button>
                </Link>

                <Link to='/questions'>
                    <Button buttonColor = 'green'>
                        Questions 
                    </Button>
                </Link> 

                <Link to='/situation'>
                    <Button buttonColor = 'green'>
                        Situation
                    </Button>
                </Link> 
            </div>

            <div className='register'>
                <Register/>
            </div>
        </div>
    )
}

export default Navbar
