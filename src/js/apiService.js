const API_KEY = '21924211-a56ef8093bc4c324081574229';
const URL = 'pixabay.com/api';

function fetchImage(name) {
  return fetch(
    `https://${URL}/?image_type=photo&orientation=horizontal&q=${name}&page=1&per_page=12&key=${API_KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error fetching data');
  });
}

export default { fetchImage };

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
