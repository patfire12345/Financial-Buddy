import React, { useState } from 'react'
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import './Goals.css'

function Goals() {

    // const [state, setState] = useState("cow");

    const onSubmit = async (values) => {

        // values.preventDefault();
        // setState(values.target.loan);
        
        const response = await fetch("",
            {
                method: "GET", 
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        );

        if(!response.ok) {
            throw new Error(response.messages)
        }
        
        const user = await response.json();

        // do something with the data
    }

    return (
        <div className='goals'>
            <div className='goals-left'>
                <div className="goals-progress">
                    <div className="goals-now-future">
                        Now vs. the Future
                    </div>

                    <div className="goals-preferences">
                        Preferences 
                    </div>

                    <div className="goals-goals">
                        Goals
                    </div>
                </div>
            </div>
            <div className='goals-title-set'>
                <div className='step1'>
                    Step 3 of 3
                </div>
                <div className='goals-title'>
                    5 Year Goals
                </div>

                <div className='goals-question'>
                    What are some of the goals that you want to achieve in 5 years? <br/>
                    Select as many as you like.
                </div>

                <div>
                    <form className="baseForm" onSubmit={onSubmit} noValidate>
                        <div>
                            <div className='goals-loan'>
                                Pay off my student loan
                                <br/>
                                <input
                                type="radio"
                                name="loan"
                                id="loan"
                                value="loan"
                                />
                            </div>
                        </div>
                        <div>
                            <div className='goals-mortgage'>
                                Taking out a mortgage
                                <br/>
                                <input
                                type="radio"
                                name="mortgage"
                                id="mortgage"
                                value="mortgage"
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='goals-independent'>
                                Become financially independent
                                <br/>
                                <input
                                type="radio"
                                name="independent"
                                id="independent"
                                value="independent" 
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='goals-savings'>
                                Save up to 50k
                                <br/>
                                <input
                                type="radio"
                                name="savings"
                                id="savings"
                                value="savings" 
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='goals-car'>
                                Buy my own car
                                <br/>
                                <input
                                type="radio"
                                name="car"
                                id="car"
                                value="car"
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='goals-passive'>
                                Have stable passive income
                                <br/>
                                <input
                                type="radio"
                                name="passive"
                                id="passive"
                                value="car" 
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='goals-degree'>
                                Save up for a degree
                                <br/>
                                <input
                                type="radio"
                                name="degree"
                                id="degree"
                                value="degree"
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='goals-other'>
                                Other
                                <br/>
                                <input
                                type="radio"
                                name="other"
                                id="other"
                                value="other"
                                />
                                <br/>
                            </div>
                        </div>

                        <div className='goals-next'>
                            <Link to='/'>
                                <input
                                type="submit"
                                value="Finish"
                                />
                            </Link>
                        </div>
                    </form>

                    <div className='goals-skip'>
                            <Link to='/'>
                                <input
                                type="button"
                                value="Skip for now"
                                />
                            </Link>
                    </div>

                    <div className="goals-to-home">
                        <Link to='/preferences'>
                            Back to the previous step
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Goals
