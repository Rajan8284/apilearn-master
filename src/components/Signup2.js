import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

const Signup2 = (props) => {
    const { handleSubmit, prePage, education, getEducation, getProfession, profession,
        isError,getLocation, location, getCountry, country,values,handleChange} = props;
    useEffect(() => {
        getEducation();
        getProfession();
        getLocation();
        getCountry();
    }, []);

    return (
        <div className="container">
            <div className="signup">
                <h3>Sign Up</h3><br />
                <form>
                    <div className='drop1'>
                        <Form.Select size="sm" value={values.education} name="education" onChange={(e)=>handleChange("education",e.target.value)} >
                            <option>Choose Education</option>
                            {education.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>
                                    {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                        {isError.education.message ? (
                        <p>{isError.education.message}</p>
                    ) : null}
                    </div>
                    <br />
                    <div className='drop1'>
                        <Form.Select size="sm"  value={values.profession} name="profession" onChange={(e)=>handleChange("profession",e.target.value)}>
                        <option>Current profession</option>
                            {profession.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                        {isError.profession.message ? (
                        <p>{isError.profession.message}</p>
                    ) : null}
                    </div>
                    <br />
                    <div className='drop1'>
                        <Form.Select size="sm" value={values.location} name="location" onChange={(e)=>handleChange("location",e.target.value)}>
                        <option>Select Location</option>
                            {location.map((item) => {
                                return (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                        {isError.location.message ? (
                        <p>{isError.location.message}</p>
                    ) : null}
                    </div>
                    <br />
                    <div className='drop1'>
                        <Form.Select size="sm"  value={values.country} name="country" onChange={(e)=>handleChange("country",e.target.value)}>
                        <option>Choose destination country</option>
                            {country.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                        {isError.country.message ? (
                        <p>{isError.country.message}</p>
                    ) : null}
                    </div>
                    <br />
                    <div className='drop1'>
                        <h6>How did you here about us?</h6>
                        <Form.Select size="md" value={values.about_us} name="about_us" onChange={(e)=>handleChange("about_us",e.target.value)}>
                            <option>Select</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Twiter">Twiter</option>
                        </Form.Select>
                        {isError.about_us.message ? (
                        <p>{isError.about_us.message}</p>
                    ) : null}
                    </div><br />
                    <div className="btn2">
                        <button type="button" onClick={() => prePage()}>Back</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" onClick={(e) => handleSubmit(e)}>Next</button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )
}
export default Signup2