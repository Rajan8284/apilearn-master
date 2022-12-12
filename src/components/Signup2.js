import React, { useEffect } from "react";
import { Form } from "react-bootstrap";

const Signup2 = (props) => {
    const { nextPage, prePage, education, getEducation, getProfession, profession, getLocation, location, getCountry, country } = props;


    useEffect(() => {
        getEducation();
        getProfession();
        getLocation();
        getCountry();
    }, [])

    return (
        <div>
            <h3>Sign Up</h3><br />
            <form>
                <div className='drop1'>
                    <Form.Select size="sm">
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
                    <Form.Select size="sm">
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
                    <Form.Select size="sm">
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
                    <Form.Select size="sm">
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
                    <Form.Select aria-label="Default select example" size="md" >
                        <option>select</option>
                        <option value="1">FaceBook</option>
                        <option value="2">Instagram</option>
                        <option value="3">Twiter</option>
                        <option value="4">Other</option>
                    </Form.Select>

                </div><br />
                <button type="button" onClick={() => prePage()}>Back</button>&nbsp;&nbsp;&nbsp;
                <button type="button" onClick={() => nextPage()}>Next</button>
            </form>
        </div>
    )
}
export default Signup2