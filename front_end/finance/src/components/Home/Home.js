import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import RBC from '../../images/RBC.PNG'
import './Home.css'

// Home page, leads to signup 
function Home() {
    return (
        <div className="home">
            <div className="home-background">
                <div>
                    <img src={RBC} className='home-img'/>
                </div>
                <div className="home-set">
                    <div className="home-title">
                        You've graduated, now what?
                    </div>

                    <div className="home-description">
                        Tell us a bit about yourself and your financial goals, and we'll tell you how to get there!
                    </div>
                </div>
                
                <div>
                    <Link to='/situation'>
                        <button className='home-next'>
                            <div className='home-next-text'>
                                Let's go!
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
