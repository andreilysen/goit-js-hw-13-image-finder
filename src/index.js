import API from './js/apiService.js';
import getRefs from './js/refs.js';
import galleryCard from './tamplate/galleryCard.hbs';
import debounce from 'lodash.debounce';

import './sass/main.scss';

const refs = getRefs();

function renderImg(images) {
  const markup = images.hits.map(img => galleryCard(img)).join('');
  refs.gallery.innerHTML = markup;
  //   console.log(markup);
}
const searchImage = e => {
  const searchVal = e.target.value;
  if (searchVal === '') {
    return (refs.gallery.innerHTML = '');
  }
  API.fetchImage(searchVal).then(searchVal => {
    //   console.log(cats.hits);
    renderImg(searchVal);
  });
  //   console.log(e.target.value);
};
refs.query.addEventListener('input', debounce(searchImage, 500));
// console.log(refs.query.value);
