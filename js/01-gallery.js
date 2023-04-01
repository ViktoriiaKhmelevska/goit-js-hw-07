import { galleryItems } from './gallery-items.js';
// Change code below this line
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

container.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    if (!(event.target.classList.contains('gallery__image'))) {
         return;
    }
    const currentItem = event.target.closest('.gallery__image');
    const itemId = currentItem.dataset.source;
  const data = galleryItems.find(({ original }) => original === itemId);
const instance = basicLightbox.create(`
    <div class="gallery__item">
            <a class="gallery__link" href="${data.original}">
                <img
                    class="gallery__image"
                    src="${data.original}"
                    data-source="${data.original}"
                    alt="${data.description}"
                />
            </a>
        </div>`, {
    className: 'modal',
    onShow: () => window.addEventListener("keydown", closeByEsc),
    onClose: () => window.removeEventListener("keydown", closeByEsc),
        });
    instance.show();

    function closeByEsc(ev) {
         if (ev.code === "Escape") {
            instance.close();
        };
    };
	setTimeout(() => {
	instance.close((instance) => console.log('finished close()', instance))
			}, 5000)
  };

