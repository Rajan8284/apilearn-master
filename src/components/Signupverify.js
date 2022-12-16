import React from "react";

const Signupverify = (props) => {
    const {responseMsg,values,handleChange,isError,handleSubmit,verifyEmail} = props;
    return (
        <div className="container">
            <div className="signup1">
                <h5>Verify your email</h5>
                <p>{responseMsg}</p>
                <input placeholder="Enter your OTP" value={values.otp} name="otp"
                        type="text" onChange={(e) => handleChange("otp", e.target.value)} />
                    {isError.otp.message ? (
                        <p>{isError.otp.message}</p>
                    ) : null}              
                <br />
                <br />
                <button type="button" onClick={(e)=>{ 
                    handleSubmit(e)
                    verifyEmail();
                   }}>Verify</button>
                <br/>
            </div>

        </div>
    )
}
export default Signupverify