import React from "react";

const Signup3=(props)=>{
const {nextPage,prePage}=props;

    return(
        <div>
            <h3>Set Password</h3>
            <form>
            <button type="button" onClick={()=> prePage()}>Back</button>&nbsp;
            <button type="button" onClick={()=> nextPage()}>SignUp</button>
            </form>
        </div>
    )
}
export default Signup3