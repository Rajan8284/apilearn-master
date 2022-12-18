import { useState } from "react";
import Validation from "../helper/Validation";
import ContactController from "../apis/controllers/contact.controller";
import { toast } from 'react-toastify';
const LoginService=()=>{
    const [isError, setError] = useState({
        email: {
            rules: ["required", "email"],
            isValid: true,
            message: "",
        },
        password: {
            rules: ["required", "password"],
            isValid: true,
            message: "",
        },
    })
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const [errorMsg, setErrorMsg] = useState(null);
    const handleChange = (field, value) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({ ...values, [field]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let validation = new Validation(isError);
        let isValid = validation.isFormValid(values);
        if (isValid && !isValid.haveError) {
            console.log("Login Success")
        } else {
            setError({ ...isValid.errors });
        }
    };
    const notify = () => toast("Password does not match try again");
    const notify1 = () => toast("Login Successfully");

    const userLogin = async () => {
        const response = await new ContactController().postLoginDetail(values);
        if (response && response.status) {
            console.log(response.message);
            notify1();
            setValues({ email: "", password: "" });
        } else {
            notify();
            setErrorMsg(response.message);
            console.log("===>>Error", response.message);
        }
    };
    return{
        values,
        isError,
        errorMsg,
        handleSubmit,
        handleChange,
        userLogin,
    }
}

export default LoginService