import React from "react";
const Signup1 = (props) => {
    const { values, handleChange, isError, handleSubmit} = props;
    
    return (
        <div className="container">
            <div className="signup">
                <form>
                    <h3>Sign Up</h3><br />
                    <input placeholder="Enter your firstname" value={values.first_name} name="first_name"
                        type="text" onChange={(e) => handleChange("first_name", e.target.value)} />
                    {isError.first_name.message ? (
                        <p>
                            {isError.first_name.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter your lastname" value={values.last_name} name="last_name"
                        type="text" onChange={(e) => handleChange("last_name", e.target.value)} />
                    {isError.last_name.message ? (
                        <p>
                            {isError.last_name.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter your email address" value={values.email} name="email"
                        type="text" onChange={(e) => handleChange("email", e.target.value)} />
                    {isError.email.message ? (
                        <p className="">
                            {isError.email.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter your contact number" name="phonenumber" value={values.phonenumber}
                        type="tel" onChange={(e) => handleChange("phonenumber", e.target.value)} />
                    {isError.phonenumber.message ? (
                        <p className="">
                            {isError.phonenumber.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter date of birth" name="dob" value={values.dob}
                        type="date" onChange={(e)=>handleChange("dob",e.target.value)} />
                    {isError.dob.message ? (
                        <p className="">
                            {isError.dob.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <div className="btn2">
                        <button type="button" onClick={(e) => {
                            handleSubmit(e)                           
                        }}>
                            Next
                        </button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )
}
export default Signup1