export async function getWorks() {
    const responseWorks = await fetch("http://localhost:5678/api/works")
    const works = await responseWorks.json();
    return works;
}