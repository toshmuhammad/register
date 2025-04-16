import toast from "./toast.js";

function validator(formData) {

    let formObj = {};
    for (let [key, value] of formData.entries()) {
        if(value.trim() === "") {
        formObj[key] = value;
            toast('error', `${key} Bo'lishi shart`);
            return formObj;
        }
    }
    return false;
}

export default validator