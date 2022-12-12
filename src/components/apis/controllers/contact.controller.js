import React from "react";
import ContactService from "../services/contact.services";

class ContactController extends React.Component {
    
    async getEducationDetail() {
        let response = await ContactService.getContact();
        return response;
    };
    async getProfessionDetail() {
        let response = await ContactService.getProfession();
        return response;
    }
    async getLocationDetail(){
        let response = await ContactService.getLocation();
        return response;
    }
    async getCountryDetail(){
        let response = await ContactService.getCountry();
        return response;
    }
    async contactUs(data, countryData) {
        let post = {
            country_code: "+" + countryData.dialCode,
            phonenumber: data.phone_no,
        };
        let response = await ContactService.saveContactUs(post);
        return response;
    };

    async putContact(data) {
        let put = {
            title: data.title,
            body: data.body,
        };
        let response = await ContactService.putContact(put);
        return response;
    };


}
export default ContactController;
