import { login } from "./request.js";
import "./protector.js";
import validator from "./validator.js";


const elForm = document.getElementById("formLogin");

elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const checker = validator(formData);

    if (checker) {
        e.target[checker?.target]?.focus();
    } else {
        e.target.dataset.state = "pending";
        e.submitter.disabled = true;
        login(result)
            .then((res) => {
                window.location.replace("/index.html");
                localStorage.setItem("user", JSON.stringify(res));
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                e.target.dataset.state = "normal";
                e.submitter.disabled = false;
            });
    }
});