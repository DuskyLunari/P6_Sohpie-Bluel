import { login } from "../services/api.js"

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form);

    const formEntries = {
        email: formData.get("email"),
        password: formData.get("password")
    }

    try {
        const loginInfo = await login(formEntries)
        // checking if token is correct
        if (loginInfo.token) {
            window.localStorage.setItem("token", loginInfo.token);
            window.location.href = "index.html";
        }   
        else {
            const loginError = document.querySelector("div.error-login"); 
            loginError.classList.remove("hidden");
        }
    }
    
    catch (error) {
        console.error("Une erreur est survenue", error);
    }
});