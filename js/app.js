import { log } from "console";
import "./protector.js";
import { addProduct, getProducts } from "./request.js";

const elAddButton = document.getElementById("addButton");
const elList = document.getElementById("list");

elAddButton.addEventListener("click", function () {
    const title = prompt("Ma`lumot kirgizing: ", "Olma");
    const sendData = { title };

    addProduct(sendData)
        .then((res) => {
            elList.innerText += "<br/>" + JSON.stringify(res);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => { });
});


getProducts()
    .then((res) => {
        res.forEach(({title, id}) => {
            elList.innerHTML += `<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">&{title}</h5>
            <button id='${id}' class="text-right underline text-blue-500 href="./register.html">Delete</button>
            </a>`;
        });
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => { });


    elList.addEventListener("click", function ({ target }) {
        if (target.innerText === "Delete") {
            console.log(target.id);
            deleteProduct(target.id)
            .then((res) => {
                alert(res);
                target.parentElement.remove()
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {});
        }
    });