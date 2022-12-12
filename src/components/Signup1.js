import React from "react";

const Signup1=(props)=>{
    const {nextPage,values,handleChange}=props;

    return(
        <div>
            <form>
                <h3>Sign Up</h3><br/>
                <input placeholder="Enter your name" name="name" value={values.name} 
                type="text" onChange={(e)=>handleChange("name",e)} />
                <br/><br/>
                <input placeholder="Enter your email address" name="email" value={values.email} 
                onChange={(e)=>handleChange("email",e)} />
                <br/><br/>
                <input placeholder="Enter your conatact" name="phone_no" value={values.phone_no} 
                onChange={(e)=>handleChange("phone_no",e)} />
                <br/><br/>
                <input placeholder="Enter date of birth" name="dob" value={values.dob} 
                 type="date" onChange={(e)=>handleChange("dob",e)} />
                <br/><br/>
                <button type="button" onClick={()=>{nextPage()}}>
                    Next
                </button>
            </form>
        </div>
    )
}
export default Signup1