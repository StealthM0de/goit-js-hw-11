export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41294907-82618e294fccd3c0d3951bd51';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
