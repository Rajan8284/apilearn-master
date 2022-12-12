import { mainWrapper } from "./main";
import Constant from "../constants";
const ContactService={
getContact,
saveContactUs,
putContact,
getProfession,
getLocation,
getCountry,
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

function putContact(params) {
    return mainWrapper.put(Constant.host + "/posts/1",params);
};


export default  ContactService