import {getWorks} from "../services/api.js";

const works = await getWorks();

// initialize gallery display injecting the data from the API
galleryDisplay(works);


// handles the gallery display for the image & caption
function galleryDisplay(worksDisplay) {
    const galleryContainer = document.querySelector(".gallery");
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
