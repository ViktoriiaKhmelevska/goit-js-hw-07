import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */}
const container = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);

function createMarkup(items) { 
    return items.map(({ preview, original, description }) => 
         `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    ).join('');
};
