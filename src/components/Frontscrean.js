import React, { useState } from "react";
import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";
import Validation from "./helper/Validation";
import ContactController from "./apis/controllers/contact.controller";
const Frontscrean = () => {
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
            rules: ["required"],
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
        education:{
            rules:["required"],
            isValid: true,
            message: "",
        },
        profession:{
            rules:["required"],
            isValid: true,
            message: "",
        },
        location:{
            rules:["required"],
            isValid: true,
            message: "",
        },
        country:{
            rules:["required"],
            isValid: true,
            message: "",
        },
        about_us:{
            rules:["required"],
            isValid: true,
            message: "",
        },
    });
    const defaultValues = {
        one: {
            first_name: "",
            middle_name: "",
            last_name: "",
            email: "",
            phonenumber: "",
            dob: "",
            address: "",
            city: "",
            fcm_token: "",
            gender: "",
        },
        two: {
            degree_id: "",
            device_id: "",
            education: "",
            location: "",
            profession: "",
            profession_title: "",
            country: "",
            about_us: ""
        },
        three: {
            device_name: "",
            device_type: "",
            password: "",
            confirmpassword: "",
            industry_type_id: [],
            linkedin_url: "",
            resumption_semster: "",
            state: "",
            zipcode: ""
        }
       
    };
    const [values, setValues] = useState(defaultValues);

    const [education, setEducation] = useState([]);
    const [profession, setProfession] = useState([]);
    const [location, setLocation] = useState([]);
    const [country, setCountry] = useState([]);

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
   // console.log("CountryId=======------->>>>",country.id)
   
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


    const nextPage = () => {
        setPage(page + 1);
    };
    const prePage = () => {
        setPage(page - 1);
    }

    return (
        <div>
            {page === 1 ?
                <Signup1
                    isError={isError}
                    values={values}
                    handleChange={(field, value) => handleChange(field, value, 'one')}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        let validation = new Validation(isError);
                        let isValid = validation.isFormValid(values.one);
                        if (isValid && !isValid.haveError) {
                            setPage(page + 1)
                        } else {
                            setError({ ...isValid.errors });
                        }
                    }}
                />
                : ""}

            {page === 2 ?
                <Signup2
                    isError={isError}
                    country={country}
                    values={values}
                    setValues={setValues}
                    handleChange={(field, value) => handleChange(field, value, 'two')}
                    getCountry={() => getCountry()}
                    profession={profession}
                    getEducation={() => getEducation()}
                    getProfession={() => getProfession()}
                    education={education}
                    location={location}
                    getLocation={() => getLocation()}
                    nextPage={() => nextPage()}
                    prePage={() => prePage()}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        let validation = new Validation(isError);
                        let isValid = validation.isFormValid(values.two);
                        if (isValid && !isValid.haveError) {
                            setPage(page + 1)
                        } else {
                            setError({ ...isValid.errors });
                        }
                    }}
                />
                : ""}

            {page === 3 ?
                <Signup3
                    isError={isError}
                    handleChange={(field, value) => handleChange(field, value, 'three')}
                    values={values}
                    prePage={() => prePage()}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        let validation = new Validation(isError);
                        let isValid = validation.isFormValid(values.three);
                        if (isValid && !isValid.haveError){
                            if(values.three.password !==values.three.confirmpassword){
                                console.log("Password Not match")
                            }else{
                                setPage(page + 1)
                            }
                        } else {
                            setError({ ...isValid.errors });
                        }
                    }} />
                : ""}

        </div>
    )
}
export default Frontscrean