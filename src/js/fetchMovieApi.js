const axios = require('axios').default;
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '7c6a11c2d8e8524ccfd41d8aedf2bd73';

// створюємо клас MovieApiService з методом getMovies()
export default class MovieApiService {
    constructor() {
        this.inputValue = '';
        // this.page = 1;
        // this.perPage = 40;
    }
    
    async getGenres() {
        try {
            const response = await axios.get(`${BASE_URL}genre/movie/list?api_key=${KEY}`);
            // console.log(response.data);
            // Збільшуємо значення this.page += 1
            // this.incrementPage();
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
    
    async getTrendingMovies() {
        try {
            const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
          
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

       async searchMovies() {
        try {
            const response = await axios.get(`${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=${this.page}1&include_adult=false&query=${this.inputValue}`);
            console.log(response.data);
            // Збільшуємо значення this.page += 1
            // this.incrementPage();
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
     // Функція збільшення значення this.page
    incrementPage() {
        this.page += 1;
    }
    // Функція оновлення значення this.page
    resetPage() {
        this.page = 1
    }

    get value() {
        return this.inputValue
    }

    set value(newValue) {
        this.inputValue = newValue
    }
}
 