import ApiService from "./ApiService";

class ProductsService extends ApiService{

    getProducts() {
            return this.products;
            let url = 'http://127.0.0.1:8000/products.json';

            return fetch(url, {
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json());
    }
    getProduct(id) {

        let url = `http://127.0.0.1:8000/product.json`;

        return fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
    getOffers(id) {

        let url = `http://127.0.0.1:8000/offers.json`;

        return fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
    getCategories(id) {

    }
    getHome() {

    }
}

export default ProductsService;
