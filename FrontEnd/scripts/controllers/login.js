import { login } from "../services/api.js"

const form = document.querySelector("form")
form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form);

    const formEntries = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    const loginInfo = await login(formEntries);
    window.localStorage.setItem("token", loginInfo.token);
})