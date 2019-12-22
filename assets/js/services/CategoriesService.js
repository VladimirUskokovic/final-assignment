import ApiService from "./ApiService";

const API_ENDPOINT = "http://127.0.0.1:8000/api/v1/categories/";

class CategoriesService extends ApiService {

    getCategories() {
        return fetch(`${API_ENDPOINT}?categories`)
            .then(response => response.json());
        // return this.categories;

        // let url = 'http://127.0.0.1:8000/categories.json';
        //
        // return fetch(url, {
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => res.json());
    }
    getCategory(categoryId) {
        return fetch(`${API_ENDPOINT}${categoryId}`)
            .then(response => response.json());
        // return this.categories.find(category => category.categoryId === categoryId);
    }
}

export default CategoriesService;
