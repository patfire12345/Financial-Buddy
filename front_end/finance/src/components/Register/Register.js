import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

// helper component that contains signup and login
function Register() {
    return (
        <div>
            <Link to='/signup'>
                <Button buttonColor = 'green'>
                    Sign Up  
                </Button>
            </Link>
            <Link to='/login'>
                <Button buttonColor = 'green'>
                    Log in
                </Button>
            </Link>  
        </div>
    )
}

export default Register
