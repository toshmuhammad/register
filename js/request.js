

async function register(formObj, url) {
    let req = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObj)
    });

    if (req.status === 200) {
        loading.classList.remove("hidden")
        let res = await req.json()
        localStorage.setItem("user", JSON.stringify(res))
        setTimeout(() => { window.location.href = 'https://127.0.0.1:5500/index.html' }, 2000)
        return true;
    }
    return false;
}

export default register










export async function login(user) {
    const req = await fetch("https://json-api.uz/api/project/fn37/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    const res = await req.json();

    if (req.status === 200) {
        return res;
    } else {
        throw new Error("Xatolik bo'ldi");
    }
}


export async function addProduct(obj) {
    const token = JSON.parse(localStorage.getItem("user"))?.access_token;
    const req = await fetch("https://json-api.uz/api/project/fn37/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(obj),
    });

    const res = await req.json();

    if (req.status === 200) {
        return res;
    } else {
        throw new Error("Xatolik bo'ldi");
    }
}


export async function deleteProduct(id) {
    const token = JSON.parse(localStorage.getItem("user"))?.access_token;
    const req = await fetch(`https://json-api.uz/api/project/fn37/products/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const res = await req.text();

    if (req.status === 200) {
        return res;
    } else {
        throw new Error("Xatolik bo'ldi");
    }
}


export async function getProducts() {
    const req = await fetch("https://json-api.uz/api/project/fn37/products");

    const res = await req.json();

    if (req.status === 200) {
        return res.data;
    } else {
        throw new Error("Xatolik bo'ldi");
    }
}