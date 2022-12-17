import React from "react";
import LoginService from './function.controller/Login.services';
const Login = () => {   
     const { values, handleSubmit, handleChange, isError, userLogin, errorMsg } = LoginService();

return (
        <div className="container">
            <div className="signup">
                <h3>Welcome Back</h3>
                <form>
                    <input type="text" placeholder="Enter your Email Address" name="email"
                        value={values.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {isError.email.message ? (<p>{isError.email.message}</p>) : null}
                    <br /><br />
                    <input type="password" placeholder="Enter your password" name="password"
                        value={values.password}
                        onChange={(e) =>handleChange("password", e.target.value)}
                    />
                    {isError.password.message ? (<p>{isError.password.message}</p>)
                        : <p>{errorMsg}</p>}
                    <div className="btn2">
                        <button type="button" onClick={(e) => {
                            handleSubmit(e)
                            userLogin();
                        }}>Login</button>
                    </div><br />
                </form>
            </div>
        </div>
    )
}
export default Login