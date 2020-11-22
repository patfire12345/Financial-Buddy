import React from 'react'
import {Link} from 'react-router-dom'
import './Recommend.css'

function Recommend() {
    return (
        <div>
            <div className="recommend-left">
                <div className="recommend-title">
                    Financial Products Recommended for You
                    
                </div>
                <div className="recommend-subtitle">
                    Here are some financial products tailored to your goals and needs, 
                    highlight the ones you're interested in to learn more about them!
                </div>

                <div className='recommend-advice-one-title'>
                    Saving and Investing
                </div>
                <div className='recommend-advice-one-description'>        
                    According to your goals, you have a strong interest in low risk investments and want to pay off your student loan as soon as possible. 
                    Here are some products we suggest that you should look into to ensure your financial security! 
                    Get advice, whether you're investing $50 or $5,000.
                </div>

                <div className='recommend-advice-two-title'>
                    Loan Options
                </div>
                <div className='recommend-advice-two-description'>        
                    One of your goals is to buy a new car! 
                    We’re so excited to help you get started on that journey. 
                    We're here to guide you through the car buying journey - with advice to help find the perfect vehicle and right financing solution for you. 
                    See how your down payment amount and financing term could affect your loan payment.
                </div>

                <div className='recommend-advice-three-title'> 
                    Credit Cards
                </div>
                
                <div className='recommend-advice-three-description'>
                    As you will be spending more on clothing and rent once you start working, you should consider upgrading your credit card! 
                    They’re convenient and secure, and help give you the freedom to manage your finances, cover unexpected emergencies and also take advantage of rewards and special insurances. 
                    They’re also an easy way to establish a credit history! 
                </div>
            </div>

            <div className='recommend-right'>
                <div className="recommend-tax-free">
                    Tax-Free Savings Account
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
                <div className="recommend-savings">
                    Registered Retirement Savings Plan
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
                <div className="recommend-certificates">
                    Guarenteed Investment Certificates
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
                <div className="recommend-car">
                    RBC Car Loan
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
                <div className="recommend-line-credit">
                    Line of Credit
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
                <div className="recommend-mastercard">
                    WestJet RBC World Elite Mastercard
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
                <div className="recommend-visa">
                    RBC Rewards+ Visa
                    <div className='recommend-learn'>
                        <Link to='/'>
                            <input
                            type="button"
                            value="Learn More"
                            className='recommend-learn-button'
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <div className='recommend-print'>
                <Link to='/'>
                    <input
                    type="button"
                    value="Print Results"
                    className='recommend-print-button'
                    />
                </Link>
            </div>

            <div className="recommend-to-home">
                <Link to='/goals'>
                    Back to the previous step
                </Link>
            </div>
        </div>
    )
}

export default Recommend
