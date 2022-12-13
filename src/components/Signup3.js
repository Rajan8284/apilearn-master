import React from "react";

const Signup3 = (props) => {
    const { nextPage, prePage,values, handleChange,isError} = props;

    return (
        <div className="container">
            <div className="signup">
                <h3>Set Password</h3>
                <form>
                    <input placeholder="Enter your password" name="password" value={values.password}
                        type="password" onChange={(e) => handleChange("password", e.target.value)} />
                        {isError.password.message ? (
                        <p>
                            {isError.password.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Confirm your password " name="confirmpassword" value={values.confirmpassword}
                        type="password" onChange={(e) => handleChange("confirmpassword", e.target.value)} />
                        {isError.confirmpassword.message ? (
                        <p>
                            {isError.confirmpassword.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <div className="btn2">
                        <button type="button" onClick={() => prePage()}>Back</button>&nbsp;
                        <button type="button" onClick={() => nextPage()}>SignUp</button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )
}
export default Signup3