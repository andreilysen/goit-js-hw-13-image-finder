import ImageSearch from './js/apiService.js';
import getRefs from './js/refs.js';
import galleryCard from './tamplate/galleryCard.hbs';
import './sass/main.scss';
const imageSearch = new ImageSearch();
const refs = getRefs();

// let searchVal = '';

const renderImg = images => {
  const markup = images.hits.map(img => galleryCard(img)).join('');
  //   console.log(images.hits.length);

  refs.gallery.insertAdjacentHTML('beforeend', markup);
  if (images.hits.length === 12) {
    return refs.loadButton.classList.remove('is-hidden');
  }

  return refs.loadButton.classList.add('is-hidden');
};

const onSearchImage = async e => {
  e.preventDefault();
  //   console.log(e.currentTarget.elements.query.value);
  imageSearch.searchVal = e.currentTarget.elements.query.value;
  refs.gallery.innerHTML = '';

  imageSearch.resetPage();
  await imageSearch.fetchImage().then(renderImg);
};
const loadMore = async click => {
  await imageSearch.fetchImage().then(renderImg);
  const element = document.querySelector('.load-button');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
  //   searchImage(searchVal);
};

refs.searchForm.addEventListener('submit', onSearchImage);
// console.log(refs.query.value);
refs.loadButton.addEventListener('click', loadMore);
