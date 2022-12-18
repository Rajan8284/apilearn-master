import React from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup3 = (props) => {
    const { prePage, values, handleChange, isError, handleSubmit, errMsg, postData } = props;

    

    return (
        <div className="container">
            <div className="signup">
                <h3>Set Password</h3>
                <form>
                    <input placeholder="Enter your password" name="password" value={values.password}
                        type="password" onChange={(e) => handleChange("password", e.target.value)} />
                    {isError.password.message ? (
                        <p>{isError.password.message}</p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Confirm your password " name="confirmpassword" value={values.confirmpassword}
                        type="password" onChange={(e) => handleChange("confirmpassword", e.target.value)} />
                    {isError.confirmpassword.message ? (
                        <p>{isError.confirmpassword.message}</p>
                    ) : null}
                    {
                        values.three.password !== values.three.confirmpassword ?
                            <p>Password not match</p> : ""
                    }
                    <br />{errMsg}
                    <br /><br />
                    <div className="btn2">
                        <button type="button" onClick={() => prePage()}>Back</button>&nbsp;
                        <button type="button" onClick={(e) => {
                            handleSubmit(e)
                            postData();
                           
                        }}>SignUp</button>
                    </div>
                    <br />
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}
export default Signup3