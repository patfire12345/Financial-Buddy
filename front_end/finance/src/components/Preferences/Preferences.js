import React from 'react'
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import './Preferences.css'

function Preferences() {

    const formik = useFormik({
        initialValues: {
            creditScore: "",
            savings: "$",
            loan: "$",
        },
    })

    const onSubmit = async (values) => {
        
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
        <div className='preferences'>
            <div className='preferences-left'>
                <div className="preferences-progress">
                    <div className="preferences-now-future">
                        Now vs. the Future
                    </div>

                    <div className="preferences-preferences">
                        Preferences 
                    </div>

                    <div className="preferences-goals">
                        Goals
                    </div>
                </div>
            </div>
            <div className='preferences-title-set'>
                <div className='step2'>
                    Step 2 of 3
                </div>
                <div className='preferences-title'>
                    Preferences
                </div>

                <div className='preferences-question'>
                    Let us know about your investment and risk preferences
                </div>

                <div>
                    <form className="baseForm" onSubmit={onSubmit} noValidate>
                        <div>
                            <div className='preferences-passive'>
                                How do you feel about passive income?
                                <br/>
                                <input
                                type="range"
                                name="passive"
                                id="passive"
                                min="0"
                                max="5"
                                />
                                
                            </div>
                        </div>
                        <div>
                            <div className='preferences-risks'>
                                How comfortable are you with investment risks?
                                <br/>
                                <input
                                type="range"
                                name="risks"
                                id="risks"
                                min="0"
                                max="5"
                                />
                                <br/>
                            </div>
                        </div>
                        <div>
                            <div className='preferences-debt'>
                                How comfortable are you with taking on debt?
                                <br/>
                                <input
                                type="range"
                                name="loan"
                                id="loan"
                                min="0"
                                max="5"
                                />
                                <br/>
                            </div>
                        </div>

                        <div>
                            <div className='preferences-withdraw'>
                                How frequently do you want to take out your money?
                                <br/>
                                <input
                                type="range"
                                name="loan"
                                id="loan"
                                className="loan"
                                value={formik.values.loan} 
                                onChange={formik.handleChange} 
                                />
                                <br/>
                            </div>
                        </div>

                        <div className='preferences-next'>
                            <Link to='/goals'>
                                <input
                                type="submit"
                                value="Next step -> "
                                onChange={formik.handleChange} 
                                />
                            </Link>
                        </div>
                    </form>

                    <div className='preferences-skip'>
                        <Link to='/goals'>
                            <input
                            type="button"
                            value="Skip for now"
                            onChange={formik.handleChange} 
                            />
                        </Link>
                    </div>

                    <div className="preferences-to-home">
                        <Link to='/situation'>
                            Back to the previous step
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Preferences
