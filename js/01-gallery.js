import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(`.gallery`);

const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);

console.log(container);

function createMarkup(items) { 
    return items
        .map(({ preview, original, description }) => {
        return
        ` <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
};

container.addEventListener(`click`, onClick);

function onClick(event) {
    if (!event.target.classList.contains(`.gallery__item`)) {
         return;
    }
 };

// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)