import { successToast, errorToast, warningToast, msgEl } from "./html-Elements.js";

function toast(status, msg) {

    switch (status) {
        case 'success':
            g(successToast, msg, '.successToast')
            break;
        case 'error':
            g(errorToast, msg, '.errorToast')
            break;
        case 'warning':
            g(warningToast, msg, '.warningToast')
            break;

        default:
            break;
    }

    function g(el, msg, selector) {
        msgEl(el, selector, msg)
        el.classList.remove('hidden')
        el.classList.add('animate-animateToast')
    }

    setTimeout(() => {
        [successToast, errorToast, warningToast].forEach(item => {
            item.classList.add('hidden')
            item.classList.remove('animate-animateToast')
        })
    }, 5000)
}

export default toast