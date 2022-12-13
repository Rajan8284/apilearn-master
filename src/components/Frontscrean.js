import React, {useState } from "react";
import Signup1 from "./Signup1";
import Signup2 from "./Signup2";
import Signup3 from "./Signup3";
import Validation from "./helper/Validation";
import ContactController from "./apis/controllers/contact.controller";
const Frontscrean=()=>{
    const [page,setPage]=useState(1);
    const [isError, setError] = useState({
        name: {
            rules: ["required","alphabetic"],
            isValid: true,
            message: "",
        },
        email: {
            rules: ["required","email"],
            isValid: true,
            message: "",
        },
        phone_no: {
            rules: ["required","numeric"],
            isValid: true,
            message: "",
        },
        dob: {
            rules: ["required"],
            isValid: true,
            message: "",
        },
        password: {
            rules: ["required","password"],
            isValid: true,
            message: "",
        },
        confirmpassword: {
            rules: ["required"," password"],
            isValid: true,
            message: "",
        },
    });
    const defaultValues={
        name:"",
        email:"",
        phone_no:"",
        dob:"",
        password:"",
        confirmpassword:""
    };
    const [values,setValues]=useState(defaultValues);
       const [education,setEducation]=useState([]);
       const[profession ,setProfession]=useState([]);
       const [location,setLocation]=useState([]);
       const [country,setCountry]=useState([]);
     
       const getEducation= async ()=>{
        const response= await new ContactController().getEducationDetail();
        if(response && response.status){
            setEducation(response.listing);
        }else{
            console.log("NO response");
        }
    };
    
    const getProfession= async ()=>{
        const response= await new ContactController().getProfessionDetail();
        if(response && response.status){
            setProfession(response.listing);
        }else{
            console.log("NO response");
        }
    };
    const getLocation= async ()=>{
        const response= await new ContactController().getLocationDetail();
        if(response && response.status){
            setLocation(response.listing);
        }else{
            console.log("NO response");
        }
    };
    const getCountry= async ()=>{
        const response= await new ContactController().getCountryDetail();
        if(response && response.status){
            setCountry(response.listing);
        }else{
            console.log("NO response");
        }
    };

    const handleChange=(field,value)=>{
        const validation = new Validation(isError);
        let node = validation.validateField(field, value);
        setError({ ...isError, [field]: node });
        setValues({...values,[field]:value});
    }
    console.log(values);
   
    const nextPage=()=>{
        setPage(page+1);
    };
    const prePage=()=>{
        setPage(page-1);
    }
    

    return(
        <div>
           
           {page===1?
            <Signup1
            isError={isError}
            values={values}
            handleChange={(field,value)=>handleChange(field,value)}
            nextPage={()=>nextPage()}
            />
            :""}

            {page===2?
            <Signup2
            country={country}
            getCountry= {()=>getCountry()}
            profession={profession}
            getEducation={()=>getEducation()}
            getProfession={()=>getProfession()}
            education={education}
            location={location}
            getLocation={()=> getLocation()}
            nextPage={()=>nextPage()}
            prePage={()=>prePage()}
            />
            :""}

            {page===3?
            <Signup3
            isError={isError}
            handleChange={(field,value)=>handleChange(field,value)}
            values={values}
            prePage={()=>prePage()}
            nextPage={()=>nextPage()}/>
            :""}
            
        </div>
    )
}
export default Frontscrean