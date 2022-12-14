import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

const Signup2 = (props) => {
    const { nextPage, prePage, education, getEducation, getProfession, profession,
         getLocation, location, getCountry, country,values,setValues} = props;
      
        //  console.log("values--->>>",values.education)
        //  console.log("values--->>>",values.profession)
       
         const handleChange=(e)=>{
            const name=e.target.name;
            setValues({[name]:e.target.value});
        }

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
                        <Form.Select size="sm" value={values.education} name="education" onChange={(e)=>handleChange(e)} >
                            <option>Select</option>
                            {education.map((item) => {
                                return (
                                    <option key={item.id} value={item.name}>
                                    {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    </div>
                    <br />
                    <div className='drop1'>
                        <Form.Select size="sm"  value={values.profession} name="profession" onChange={(e)=>handleChange(e)}>
                        <option>Select</option>
                            {profession.map((item) => {
                                return (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    </div>
                    <br />
                    <div className='drop1'>
                        <Form.Select size="sm" value={values.location} name="location" onChange={(e)=>handleChange(e)}>
                        <option>Select</option>
                            {location.map((item) => {
                                return (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    </div>
                    <br />
                    <div className='drop1'>
                        <Form.Select size="sm"  value={values.country} name="country" onChange={(e)=>handleChange(e)}>
                        <option>Select</option>
                            {country.map((item) => {
                                return (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </Form.Select>
                    </div>
                    <br />
                    <div className='drop1'>
                        <p>How did you here about us?</p>
                        <Form.Select size="md" value={values.about_us} name="about_us" onChange={(e)=>handleChange(e)}>
                            <option>select</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Twiter">Twiter</option>
                            
                        </Form.Select>
                    </div><br />
                    <div className="btn2">
                        <button type="button" onClick={() => prePage()}>Back</button>&nbsp;&nbsp;&nbsp;
                        <button type="button" onClick={() => nextPage()}>Next</button>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    )
}
export default Signup2