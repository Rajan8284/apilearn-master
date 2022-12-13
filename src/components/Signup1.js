import React from "react";

const Signup1 = (props) => {
    const { nextPage, values, handleChange, isError} = props;
    return (
        <div className="container">
            <div className="signup">
                <form>
                    <h3>Sign Up</h3><br />
                    <input placeholder="Enter your name"  value={values.name} name="name"
                        type="text" onChange={(e) => handleChange("name",e.target.value)} />
                    {isError.name.message ? (
                        <p>
                            {isError.name.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter your email address"  value={values.email} name="email"
                        type="text" onChange={(e) => handleChange("email", e.target.value)} />
                         {isError.email.message ? (
                        <p className="">
                            {isError.email.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter your conatact" name="phone_no" value={values.phone_no}
                        type="text" onChange={(e) => handleChange("phone_no", e.target.value)} />
                         {isError.phone_no.message ? (
                        <p className="">
                            {isError.phone_no.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <input placeholder="Enter date of birth" name="dob" value={values.dob}
                        type="date" onChange={(e) => handleChange("dob", e.target.value)} />
                         {isError.dob.message ? (
                        <p className="">
                            {isError.dob.message}
                        </p>
                    ) : null}
                    <br /><br />
                    <div className="btn2">
                        <button type="button" onClick={() => { nextPage() }}>
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