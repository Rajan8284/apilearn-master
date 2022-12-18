import React from "react";
import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";
import Signupverify from "./Signupverify";
import Validation from "./helper/Validation";
import Successpopup from "./Succusspopup";
import FunctionService from "./function.controller/function.services";

const Frontscrean = () => {
    const { page, handleChange, isError, values, getCountry, getEducation, getLocation, getProfession, prePage, setError, setPage, setShowModal,
       errMsg,showModal, successMsg, verifyEmail, postData, country, location, profession, education, responseMsg } = FunctionService();
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
                    handleChange={(field, value) => handleChange(field, value, 'two')}
                    getCountry={() => getCountry()}
                    profession={profession}
                    getEducation={() => getEducation()}
                    getProfession={() => getProfession()}
                    education={education}
                    location={location}
                    getLocation={() => getLocation()}
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
                    errMsg={errMsg}
                    postData={() => postData()}
                    isError={isError}
                    handleChange={(field, value) => handleChange(field, value, 'three')}
                    values={values}
                    prePage={() => prePage()}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        let validation = new Validation(isError);
                        let isValid = validation.isFormValid(values.three);
                        if (isValid && !isValid.haveError) {
                            if (values.three.password !== values.three.confirmpassword) {
                                console.log("Password Not match");
                            } else {
                                console.log("Password match");
                            }
                        } else {
                            setError({ ...isValid.errors });
                        }
                    }} /> : ""}

            {page === 4 ?
                <Signupverify
                    verifyEmail={() => verifyEmail()}
                    responseMsg={responseMsg}
                    isError={isError}
                    values={values}
                    handleChange={(field, value) => handleChange(field, value, 'four')}
                    show={() => setShowModal(true)}
                    handleSubmit={(e) => {
                        e.preventDefault();
                        let validation = new Validation(isError);
                        let isValid = validation.isFormValid(values.four);
                        if (isValid && !isValid.haveError) {
                            console.log("successfully")
                        } else {
                            setError({ ...isValid.errors });
                        }
                    }}
                />
                : ""}

            {showModal ?
                <Successpopup
                    successMsg={successMsg}
                    show={showModal}
                    close={() => setShowModal(false)}
                />
                : ""}
        </div>
    )
}
export default Frontscrean