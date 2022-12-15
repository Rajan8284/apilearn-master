import React from 'react';
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AgeError=()=>{

 const notify = () =>toast("Registration successfully!We have sent you otp to verify your email. Please check your email");
 
  return (
    <div>
      <Button onClick={notify} >Click</Button>
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
  );
}
export default AgeError