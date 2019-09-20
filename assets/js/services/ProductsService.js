import ApiService from "./ApiService";
import Product from "../components/CategoriesGrid";
import global from "../util/global";

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

    getOffers(productId) {
        return this.offers.filter(offer => offer.productId === productId);
        let url = `http://127.0.0.1:8000/offers.json`;

        return fetch(url, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }

    getProductsByCategory(categoryId) {
        return this.products.filter(product => product.categoryId === categoryId);
    }
    getProductsByBrand(brandId) {
        return this.products.filter(product => product.brandId === brandId);
    }
    getBrands() {
        return this.brands;
    }
    searchProduct(term) {
        const regTerm = new RegExp(term, 'i');
       return this.products.filter(product => product.title.match(regTerm));
    }
    getHome() {

    }
}

export default ProductsService;
