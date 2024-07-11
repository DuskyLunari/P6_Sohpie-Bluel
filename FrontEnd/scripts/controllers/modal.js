import { deleteWork } from "../services/api.js";
import { works } from "./home.js";

const modalBtn = document.getElementById("modal-btn");
const modalBtnClose = document.getElementById("close-modal");
const dialog = document.getElementById("modal");

modalBtn.addEventListener("click", (e) => {
    modalGalleryDisplay(works);
    dialog.showModal();
});

modalBtnClose.addEventListener("click", (e) => {
    dialog.close();
});

function modalGalleryDisplay(worksContent) {
    const galleryModal = document.getElementById("gallery-content");
    galleryModal.innerHTML = "";
    for (let i = 0; i < worksContent.length; i++) {
        const modalContainer = document.createElement("div")
        modalContainer.classList.add("image-modal");
        galleryModal.appendChild(modalContainer);
        const img = document.createElement("img");
        modalContainer.appendChild(img);
        img.src = worksContent[i].imageUrl;
        img.alt = worksContent[i].title;

        const iconContainer = document.createElement("div");
        iconContainer.classList.add("icon-container");
        modalContainer.appendChild(iconContainer);
        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-trash-can");
        iconContainer.appendChild(icon);

        iconContainer.addEventListener("click", async (e) => {
            if (confirm("Confirmer-vous la suppression?")) {
                try {
                    // await deleteWork(worksContent[i].id);
                    modalContainer.remove();
                    const workGallery = document.getElementById("work-gallery-" + worksContent[i].id);
                    workGallery.remove();   
                } catch (error) {
                    alert("Une erreur est survenue");
                }
            }
        })
    }
}