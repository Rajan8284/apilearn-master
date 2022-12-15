import React from "react";
import sprintf from "sprintf-js";

export default class Validation extends React.Component {
    constructor(props) {
        super(props);
        this.messages = {
            required: "This field is required",
            checked: "The terms and conditions field is required",
            email: "Please enter a valid email address",
            password:
                "Password requirements: min 8 characters long, alphanumeric, one uppercase, one lowercase and one special character",
            username:
                "Usernames can only use letters, numbers, underscores and periods.",
            decimel: "Please enter a valid amount",
            alphabetic: "Please enter a valid alphabetic characters",
            alphanumeric: "Please enter a valid alphanumeric characters",
            numeric: "Please enter a valid number",
            min: "Minimum length should be %s digits",
            max: `Please enter maximum amount of %s`,
            minmax: `Please enter minimum value of %s and maximum value of %s`,
            range: `Please enter numeric value within range of %s to %s`,
            url: "Please enter a valid link",
            match_value: "The entered input did not match.",
            image: "Please select an image",
            dob:"Age should be above 18 ! "
        };
    }
    validateField(key, value) {
        let input = this.props[key];
        let error = input;
        if (input.rules && input.rules.length > 0) {
            for (let i = 0; i < input.rules.length; i++) {
                let element = input.rules[i];
                error = this.validateRule(element, value);
                error.rules = input.rules;
                if (!error.isValid) {
                    break;
                }
            }
        }
        return error;
    }

    validateRule(rule, value) {
        let error = {
            isValid: true,
            message: "",
        };

        rule = rule.split(":");
        if (rule.length > 0) {
            switch (rule[0]) {
                case "required":
                    if ( value === null || value === "" || (Array.isArray(value) && value.length <= 0) ) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "checked":
                    if (value === null || value === "" || value === false) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;

                case "alphabetic":
                    if (value && !/^[a-zA-Z ]+$/.test(value)) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "alphanumeric":
                    if (value && !/^[0-9a-zA-Z ]+$/.test(value)) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "numeric":
                    if (value && !/^[0-9]*$/.test(value)) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "decimel":
                    if (value && !( /^[0-9]*$/.test(value) || value*1 > 0) ) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "min":
                    if (value && value.length < rule[1]) {
                        error = {
                            isValid: false,
                            message: sprintf.sprintf(
                                this.messages[rule[0]],
                                rule[1]
                            ),
                        };
                    }
                    break;
                case "max":
                    if (value && value.length > rule[1]) {
                        error = {
                            isValid: false,
                            message: sprintf.sprintf(
                                this.messages[rule[0]],
                                rule[1]
                            ),
                        };
                    }
                    break;
                    case "dob":
                        const currentYear = new Date().getFullYear();
                        const year =value.split("-")[0];
                        const age = currentYear - year;
                        if (age < 18){
                            error={
                                isValid:false,
                                message:this.messages[rule[0]]
                            }
                        }
                    break;
                case "minmax":
                    if (
                        value &&
                        !(value.length > rule[1] && value.length < rule[2])
                    ) {
                        error = {
                            isValid: false,
                            message: sprintf.sprintf(
                                this.messages[rule[0]],
                                rule[1],
                                rule[2]
                            ),
                        };
                    }
                    break;
                case "range":
                    if (
                        value &&
                        !( (value*1) >= rule[1] && (value*1) <= rule[2])
                    ) {
                        error = {
                            isValid: false,
                            message: sprintf.sprintf(
                                this.messages[rule[0]],
                                rule[1],
                                rule[2]
                            ),
                        };
                    }
                    break;
                
                case "url":
                    if (
                        value &&
                        !"(https?://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https?://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})".test(
                            value
                        )
                    ) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "image":
                    if (value && value.length < 1) {
                        error = {
                            isValid: false,
                            message: sprintf.sprintf(this.messages[rule[0]]),
                        };
                    }
                    break;
                case "email":
                    if (
                        !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                            value
                        )
                    ) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "username":
                    if (
                        !/^(?=[a-zA-Z0-9._]{6,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(
                            value
                        )
                    ) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
                case "password":
                    /*
                     USE THESE REJEX FOR OTHER CASES ** 
                    Minimum eight characters, at least one letter and one number:
                    "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

                    Minimum eight characters, at least one letter, one number and one special character:
                    "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

                    Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

                    Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

                    Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"
                    ** USE THESE REJEX FOR OTHER CASES ** 
                    */
                    if (
                        value &&
                        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&-_]{8,}$/.test(
                            value
                        )
                    ) {
                        error = {
                            isValid: false,
                            message: this.messages[rule[0]],
                        };
                    }
                    break;
            }
        }

        return error;
    }

    isFormValid(values) {
        let allFields = this.props;
        let haveError = false;
        for (let i in allFields) {
            if (typeof values[i] !== "undefined") {
                let error = this.validateField(i, values[i]);
                allFields[i] = error;
                if (!error.isValid) {
                    haveError = true;
                }
            }
        }

        return {
            haveError: haveError,
            errors: allFields,
        };
    }

    render() {
        return null;
    }

    lessThan(key, aValue, bValue)
    {
        let node = this.props[key];
        if(aValue !== "" && aValue !== null && bValue !== "" && bValue !== null && ( aValue * 1 ) <= ( bValue * 1 ) )
        {
            node.isValid = false;
            node.message = this.messages['less_than'];
            return node;
        }
        else
        {
            node.isValid = true;
            node.message = ""
            return node;
        }
    }

    greaterThan(key, aValue, bValue)
    {
        let node = this.props[key];
        if(aValue !== "" && aValue !== null && bValue !== "" && bValue !== null && ( aValue * 1 ) >= ( bValue * 1 ) )
        {
            node.isValid = false;
            node.message = this.messages['less_than'];
            return node;
        }
        else
        {
            node.isValid = true;
            node.message = ""
            return node;
        }
    }

    matchValues(key, aValue, bValue, message)
    {
        let node = this.props[key];
        console.log(key, aValue, bValue, message);
        if(aValue !== bValue)
        {
            node.isValid = false;
            node.message = message ? message : this.messages['match_value'];
            return node;
        }
        else
        {
            node.isValid = true;
            node.message = ""
            return node;
        }
    }

    notMatchValues(key, aValue, bValue, message)
    {
        let node = this.props[key];
        if(aValue === bValue)
        {
            node.isValid = false;
            node.message = message ? message : this.messages['match_value'];
            return node;
        }
        else
        {
            node.isValid = true;
            node.message = ""
            return node;
        }
    }

    async emailExist(key, email, reverse = false) {
        let node = this.props[key];
        node = this.validateField(key, email);
        /*if (node.isValid) {
            let response = await new AuthController().checkEmailExist(email);
            if (response && response.status) {
                if (reverse) {
                    node.isValid = response.exist ? true : false;
                    node.message = "The email you entered does not belong to any account.";
                }
                else {
                    node.isValid = response.exist ? false : true;
                    node.message = this.messages['email_exist'];
                }
            }
        }
        else {
            node.message = this.messages['email'];
        }*/
        return node;
    }
}

