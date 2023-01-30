const axios = require('axios').default;
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '7c6a11c2d8e8524ccfd41d8aedf2bd73';

// створюємо клас MovieApiService
export default class MovieApiService {
    constructor() {
        this.inputValue = '';
        this.currentPage = 1;
     }
    
    async getGenres() {
        try {
            const response = await axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    
    async getTrendingMovies() {
        try {
            const response = await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY}&page=${this.currentPage}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    async searchMovies() {
        try {
            const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=${this.currentPage}&include_adult=false&query=${this.inputValue}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
  
    // метод оновлення значення this.currentPage
    resetCurrentPage() {
        this.currentPage = 1
    }

    get value() {
        return this.inputValue
    }

    set value(newValue) {
        this.inputValue = newValue
    }

    get newCurrentPage() {
        return this.currentPage
    }

    set newCurrentPage(newPage) {
        this.currentPage = newPage
    }
}