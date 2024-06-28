export async function getWorks() {
    const responseWorks = await fetch("http://localhost:5678/api/works")
    const works = await responseWorks.json();
    return works;
}

export async function getFilters() {
    const responseFilters = await fetch("http://localhost:5678/api/categories")
    const filters = await responseFilters.json();
    return filters;
}

export async function login(body) {
    const responseLogin = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const userInfo = await responseLogin.json();
    return userInfo; 
}