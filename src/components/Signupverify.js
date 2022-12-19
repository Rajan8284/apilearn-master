import React from "react";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signupverify = (props) => {
    const { responseMsg, values, handleChange, isError, handleSubmit, verifyEmail,successMsg } = props;
    return (
        <div className="container">
            <div className="signup1">
                <h5>Verify your email</h5>
                <p>{responseMsg}</p>
                <p>Enter your OTP</p>
                <input placeholder="Enter your OTP" value={values.otp} name="otp"
                    type="text" onChange={(e) => handleChange("otp", e.target.value)} />
                {isError.otp.message ? (
                    <p>{isError.otp.message}</p>
                ) : null}
                {successMsg ?<p>{successMsg}</p>:""}
                <br />
                <div className="btn2">
                    <button type="button" onClick={() => {
                        handleSubmit()
                        verifyEmail();
                    }}>Verify</button>
                    <br />
                </div>
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
export default Signupverify