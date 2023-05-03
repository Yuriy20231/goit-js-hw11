import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35257003-3888449e228f8cae772a00d8b';

export default class ImagesApiService {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
    }
  
    async fetchImages() {
      const searchParams = new URLSearchParams({
        key: `${API_KEY}`,
        q: `${this.searchQuery}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        per_page: 40,
        page: `${this.page}`,
      });
  
      const url = `${BASE_URL}?${searchParams}`;
  
      const data = await axios.get(url);
      this.page += 1;
      return data;
    }
  
    resetPage() {
      this.page = 1;
    }
  
    get query() {
      return this.searchQuery;
    }
  
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  }
