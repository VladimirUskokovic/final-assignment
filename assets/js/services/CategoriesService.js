import ApiService from "./ApiService";

class CategoriesService extends ApiService {

    getCategories() {
        return this.categories;

        let url = 'http://127.0.0.1:8000/categories.json';

        return fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
    getCategory(categoryId) {
        return this.categories.find(category => category.categoryId === categoryId);
    }
}

export default CategoriesService;
