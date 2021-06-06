import ImageSearch from './js/apiService.js';
import getRefs from './js/refs.js';
import galleryCard from './tamplate/galleryCard.hbs';
import debounce from 'lodash.debounce';
import './sass/main.scss';
const imageSearch = new ImageSearch();
const refs = getRefs();

let searchVal = '';

const renderImg = images => {
  const markup = images.hits.map(img => galleryCard(img)).join('');

  refs.gallery.insertAdjacentHTML('beforeend', markup);
};

const onSearchImage = async e => {
  searchVal = e.target.value;
  refs.gallery.innerHTML = '';

  imageSearch.resetPage();
  await imageSearch.fetchImage(searchVal).then(searchVal => renderImg(searchVal));
  refs.loadButton.classList.remove('is-hidden');
};
const loadMore = async click => {
  await imageSearch.fetchImage(searchVal).then(searchVal => renderImg(searchVal));
  const element = document.querySelector('.load-button');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  //   searchImage(searchVal);
};

refs.query.addEventListener('input', debounce(onSearchImage, 500));
// console.log(refs.query.value);
refs.loadButton.addEventListener('click', loadMore);

// element.scrollIntoView({
//   behavior: 'smooth',
//   block: 'end',
// });
