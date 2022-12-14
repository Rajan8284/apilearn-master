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
    async postFormDetail(data){
        console.log("CC education",data.two.education)
        let post={
            first_name:data.one.first_name,
            last_name:data.one.last_name,
            middle_name: "",
            email: data.one.email,
            phonenumber: data.one.phonenumber,
            dob: data.one.dob,
            address:data.two.country.id,
            city: "",
            fcm_token: "",
            gender: "",
            degree_id: 232,
            device_id: "",
            education: data.two.education,
            location: data.two.location,
            profession: data.two.profession,
            profession_title:"",
            country: data.two.country,
            about_us: "",
            device_name: "",
            device_type: "",
            password: data.three.password,
            industry_type_id: [],
            linkedin_url: "",
            resumption_semster: "",
            state: "",
            zipcode: ""
        }
        let response= await ContactService.postDetails(post);
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
