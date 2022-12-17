import {useState} from "react";
import Validation from "../helper/Validation";
import ContactController from "../apis/controllers/contact.controller";
const FunctionService=()=>{
    const [page, setPage] = useState(1);
    const [isError, setError] = useState({
        first_name: {
            rules: ["required", "alphabetic"],
            isValid: true,
            message: "",
        },
        last_name: {
            rules: ["required", "alphabetic"],
            isValid: true,
            message: "",
        },
        email: {
            rules: ["required", "email"],
            isValid: true,
            message: "",
        },
        phonenumber: {
            rules: ["required", "numeric"],
            isValid: true,
            message: "",
        },
        dob: {
            rules: ["required", "dob"],
            isValid: true,
            message: "",
        },
        password: {
            rules: ["required", "password"],
            isValid: true,
            message: "",
        },
        confirmpassword: {
            rules: ["required", " password"],
            isValid: true,
            message: "",
        },
        education: {
            rules: ["required"],
            isValid: true,
            message: "",
        },
        profession: {
            rules: ["required"],
            isValid: true,
            message: "",
        },
        location: {
            rules: ["required"],
            isValid: true,
            message: "",
        },
        country: {
            rules: ["required"],
            isValid: true,
            message: "",
        },
        about_us: {
            rules: ["required"],
            isValid: true,
            message: "",
        },
        otp: {
            rules: ["required"],
            isValid: true,
            message: "",
        }
    });
    const defaultValues = {
        one: {
            first_name: "",
            last_name: "",
            email: "",
            phonenumber: "",
            dob: "",
        },
        two: {
            education: "",
            location: "",
            profession: "",
            country: "",
            about_us: ""
        },
        three: {
            password: "",
            confirmpassword: "",
        },
        four: {
            otp: "",
        }
    };
    const [values, setValues] = useState(defaultValues);
    const [responseMsg, setResponseMsg] = useState(null);
    const [token, setToken] = useState(null);
    const [education, setEducation] = useState([]);
    const [profession, setProfession] = useState([]);
    const [location, setLocation] = useState([]);
    const [country, setCountry] = useState([]);
    const [showModal, setShowModal] = useState(false)
    const getEducation = async () => {
        const response = await new ContactController().getEducationDetail();
        if (response && response.status) {
            setEducation(response.listing);
        } else {
            console.log("NO response");
        }
    };
    const getProfession = async () => {
        const response = await new ContactController().getProfessionDetail();
        if (response && response.status) {
            setProfession(response.listing);
        } else {
            console.log("NO response");
        }
    };
    const getLocation = async () => {
        const response = await new ContactController().getLocationDetail();
        if (response && response.status) {
            setLocation(response.listing);
        } else {
            console.log("NO response");
        }
    };
    const getCountry = async () => {
        const response = await new ContactController().getCountryDetail();
        if (response && response.status) {
            setCountry(response.listing);
        } else {
            console.log("NO response");
        }
    };
    const postData = async () => {
        const response = await new ContactController().postFormDetail(values);
        if (response && response.status) {
            setResponseMsg(response.message);
            setToken(response.user.token);
            setPage(page + 1);
            console.log("Response succ;ess=>", response.message);
        } else {
            console.log("Response Error=>", response.message);
        }
    };
    
    const [successMsg, setSuccessMsg] = useState(null);
    const verifyEmail = async () => {
        const response = await new ContactController().postemailDetail(values, token);
        if (response && response.status) {
            setSuccessMsg(response.message)
            setShowModal(true);
            console.log("Verify Successfull");
        } else {
            console.log("No response");
        }
    };

    const handleChange = (field, value, step) => {
        let validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        if (
            value instanceof Date ||
            value instanceof Object ||
            value instanceof Array ||
            typeof value == 'boolean'
        ) {
            setValues({
                ...values,
                [step]: {
                    ...values[step],
                    [field]: value ? value : null,
                },
            });
        } else if (!value || !value.trim()) {
            setValues({
                ...values,
                [step]: {
                    ...values[step],
                    [field]: '',
                },
            });
        } else {
            setValues({
                ...values,
                [step]: {
                    ...values[step],
                    [field]: value.trimLeft(),
                },
            });
        }
    };
    console.log("---==>values", values);
    const prePage = () => {
        setPage(page - 1);
    };
return{
    page,
    handleChange,
    isError,
    values,
    getCountry,
    getEducation,
    getLocation,
    getProfession,
    prePage,
    successMsg,
    verifyEmail,
    postData,
    country,
    location,
    profession,
    education,
    responseMsg,
    setError,
    setPage,
    showModal,
    setShowModal,
}
}
export default FunctionService