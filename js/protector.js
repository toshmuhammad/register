window.addEventListener("load", function (e) {
    const currentPage = e.target.location.pathname;
    const allowedPage = [ "/", "/index.html", "/smth.html"];
    const user = JSON.parse(localStorage.getItem("user"));

    if (user === null && allowedPage.includes(currentPage)) {
        window.location.replace("/pages/login.html");
        return;
    } 

    if (user && !allowedPage.includes(currentPage)) {
        window.location.replace("/index.html");
        return;
    } 
});