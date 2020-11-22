import React from 'react'
import {useFormik} from 'formik';
import {Link} from 'react-router-dom';
import './Preferences.css'

function Preferences(props) {

    const formik = useFormik({
        
    })

    const onSubmit = async (values) => {
        
        values.preventDefault();
        console.log(values.target.debt.value);
        console.log(values.target.withdraw.value);
        
        props.history.push("/goals");

        // const response = await fetch("",
        //     {
        //         method: "GET", 
        //         headers: {
        //             Accept: 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: {
        //             preferencePassive: values.target.passive.value,
        //             preferenceRisks: values.target.risks.value,
        //             preferenceDebt: values.target.debt.value,
        //             preferenceWithdraw: values.target.withdraw.value,
        //         }
        //     }
        // );

        // if(!response.ok) {
        //     throw new Error(response.messages)
        // }
        
        // const user = await response.json();

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
                                name="debt"
                                id="debt"
                                min="0"
                                max="5"
                                />
                                <br/>
                            </div>
                        </div>

                        <div>
                            <div className='preferences-withdraw'>
                                How frequently do you want to withdraw?
                                <br/>
                            </div>
                            
                            <div className='preferences-annually'>
                                <input
                                type="radio"
                                name="withdraw"
                                id="withdraw"
                                value="annually"
                                />
                                <label for="annually" className='preferences-annually-text'>Annually</label>
                            </div>
                            
                            <div className='preferences-three'>
                                <input
                                type="radio"
                                name="withdraw"
                                id="withdraw"
                                value="within 3 years"
                                />
                                <label for="within 3 years" className='preferences-three-text'>Within 3 Years</label>
                            </div>

                            <div className='preferences-five'>
                                <input
                                type="radio"
                                name="withdraw"
                                id="withdraw"
                                value="within 5 years"
                                />
                                <label for="within 5 years" className='preferences-five-text'>Within 5 Years</label>
                            </div>
                                
                                <br/>
                            
                        </div>

                        <div className='preferences-next'>
                            <input
                            type="submit"
                            value="Next step -> "
                            onChange={formik.handleChange} 
                            className="preferences-next-button"
                            />
                        </div>
                    </form>

                    <div className='preferences-skip'>
                        <Link to='/goals'>
                            <input
                            type="button"
                            value="Skip for now"
                            className="preferences-skip-button"
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
