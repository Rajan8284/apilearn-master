import { mainWrapper } from "./main";
import Constant from "../constants";
const ContactService={
getContact,
saveContactUs,
getProfession,
getLocation,
getCountry,
postDetails,
postemailOtp,
postLogin,
};
function getContact(params) {
    return mainWrapper.get(Constant.host + "education",params);
};
function getProfession(params) {
    return mainWrapper.get(Constant.host + "profession",params);
};
function  getLocation(params) {
    return mainWrapper.get(Constant.host + "location",params);
};
function getCountry(params) {
    return mainWrapper.get(Constant.host + "countries",params);
};
function saveContactUs(params) {
    return mainWrapper.post(Constant.host + "auth/signup",params);
};
function postDetails(params) {
    return mainWrapper.post(Constant.host + "auth/prospective-signup",params);
};
function postemailOtp(params,token) {
    let url =Constant.host + "auth/email-verification/"+token;
    return mainWrapper.get(url,params);
};
function postLogin(params){
    return mainWrapper.post(Constant.host + "auth/login",params);
};
export default  ContactService