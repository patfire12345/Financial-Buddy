import React from 'react'
import {useFormik} from 'formik'

// Login page
function Login() {

    const formik = useFormik({
        initialValues: {
        username: "",
        password: "",
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
        <div>
            <h1>Login Page</h1>

            <form className="baseForm" onSubmit={onSubmit} noValidate>
                <div>
                    Username: 
                    <input
                    type="text"
                    name="username"
                    id="username"
                    className="username"
                    value={formik.values.username} 
                    onChange={formik.handleChange} 
                    />
                    <br/>
                </div>

                <div>
                    Password: 
                    <input
                    type="password"
                    name="password"
                    id="password"
                    className="search"
                    value={formik.values.password} 
                    onChange={formik.handleChange} 
                    />
                    <br/>
                </div>
                <input
                type="submit"
                name="submit"
                id="submit"
                className="submit"
                value={formik.values.submit} // We also bind our email value
                onChange={formik.handleChange} // And, we bind our "onChange" event.
                />
            </form>
        </div>
    )
}

export default Login
