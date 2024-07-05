import { getFilters, getWorks } from "../services/api.js";

const works = await getWorks();
const filters = await getFilters();
const categoriesContainer = document.querySelector(".filters");

// add element on first position of the array
filters.unshift({
    id: 0,
    name: "Tous"
})

const token = localStorage.getItem("token");
if (token) {
    const editing = document.getElementById("editing");
    editing.classList.remove("hidden");
    const modify = document.querySelector("div.modify");
    modify.classList.remove("hidden");
    categoriesContainer.classList.add("hidden");
    const login = document.querySelector(".login");
    login.innerText = "logout";
    login.addEventListener("click", (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        window.location.reload();
    })
}

// initialize by injecting the data from the API
galleryDisplay(works);
filtersDisplay(filters);

// handles the creation of the filter buttons & their application via the API data
function filtersDisplay(filtersBtnDisplay) {
    for (let i = 0; i < filtersBtnDisplay.length; i++) {
        const btn = document.createElement("button");
        categoriesContainer.append(btn);
        btn.classList.add("button");
        btn.innerText = filtersBtnDisplay[i].name;

        // default the "all" filter set as active on init
        if (i == 0) {
            btn.classList.add("active");   
        }
        
        // create action on click of the element
        btn.addEventListener("click", (e) => {
            //check if active is already attributed, if yes remove previous iteration before atttributing it to the new one
            document.querySelector(".active")?.classList.remove("active");
            btn.classList.add("active");
            if (filtersBtnDisplay[i].id == 0) {
                galleryDisplay(works);
            } else {
                // filter data and stock it on an array to call
                const filteredWorks = works.filter((work) => filtersBtnDisplay[i].id == work.categoryId)
                galleryDisplay(filteredWorks);
            }
        })
    }
}

// handles the gallery display for the image & caption
function galleryDisplay(worksDisplay) {
    const galleryContainer = document.querySelector(".gallery");
    // empty gallery before displaying again
    galleryContainer.innerHTML = "";

    for (let i = 0; i < worksDisplay.length; i++) {
        const figure = document.createElement("figure");
        galleryContainer.append(figure);

        // creating the img inside figure
        const img = document.createElement("img");
        // attribute the img inside the figure element
        figure.appendChild(img);
        img.src = worksDisplay[i].imageUrl;
        img.alt = worksDisplay[i].title;

        // creating caption inside figure
        const caption = document.createElement("figcaption");
        // attribute the caption inside the figure element
        figure.appendChild(caption);
        caption.innerText = worksDisplay[i].title;
    }
}