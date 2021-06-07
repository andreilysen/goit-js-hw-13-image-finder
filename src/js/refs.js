export default function getRefs() {
  return {
    gallery: document.querySelector('.gallery'),
    query: document.querySelector('input'),
    loadButton: document.getElementById('load-more'),
    searchForm: document.getElementById('search-form'),
  };
}
