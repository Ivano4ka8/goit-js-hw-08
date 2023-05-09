import { galleryItems } from './gallery-items';
import simpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery'); //доступ до списку

let gallery = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
   </a>
</li>`
  )
  .join(''); //розмітка

galleryListEl.innerHTML = gallery; //додавання розмітки до штмл

gallery = new simpleLightbox('.gallery .gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
}); ///підключення сімплбокс
