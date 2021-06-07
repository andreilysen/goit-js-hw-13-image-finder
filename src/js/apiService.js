const API_KEY = '21924211-a56ef8093bc4c324081574229';

export default class ImageSearch {
  constructor() {
    this.page = 1;
    this.searchVal = '';
  }
  fetchImage() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchVal}&page=${this.page}&per_page=12&key=${API_KEY}`,
    ).then(response => {
      if (response.ok) {
        // console.log(page);
        this.page += 1;
        return response.json();
      }
      throw new Error('Error fetching data');
    });
  }

  resetPage() {
    this.page = 1;
    // console.log(page);
  }
}

// async function fetchImage(name) {
//     const response = await fetch(
//       `https://${URL}/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${API_KEY}`,
//     );
//     const img = await response.json();
//     return img;

//     //   return .then(response => {
//     //     if (response.ok) {
//     //       return response.json();
//     //     }
//     //     throw new Error('Error fetching data');
//     //   });
//   }
