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

    getProduct(productId) {
        return this.products.find(product => product.productId === productId);


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

    getProductsByCategory(categoryId) {
        return this.products.filter(product.categoryId === categoryId)
    }

    getHome() {

    }
}

export default ProductsService;
