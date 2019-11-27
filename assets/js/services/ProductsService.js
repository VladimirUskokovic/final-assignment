import ApiService from "./ApiService";
import Product from "../components/CategoriesGrid";
import global from "../util/global";

const API_ENDPOINT = "http://127.0.0.1:8000/api/v1/products";
class ProductsService extends ApiService {
    getProducts() {
        return fetch(`${API_ENDPOINT}/top-products`)
            .then(response => response.json());
    }

    getProduct(productId) {
        return fetch(`${API_ENDPOINT}/${productId}`)
            .then(response => response.json());
    }

    getOffers(productId) {
        return this.offers.filter(offer => offer.productId === productId);
    }

    getProductsByCategory(categoryId) {
        // let path = `${API_ENDPOINT}?category=${categoryId}&dir=asc&sortBy=price`;
        // const order = {
        //     name: 'price',
        //     dir: 'asc'
        // };
            let path = `${API_ENDPOINT}/?category=${categoryId}`;
            return fetch(path)
                .then(response => response.json());
    }
    getProductsByBrand(brandId) {
        return this.products.filter(product => product.brandId === brandId);
    }
    getBrands() {
        return this.brands;
    }
    sortProducts() {
        const order = {
            name: 'price',
            dir: 'desc'
        };
        let path = `${API_ENDPOINT}/?dir=${order.dir}`;
        return fetch(path)
            .then(response => response.json());
    }
    searchProduct(term) {
        return fetch(`${API_ENDPOINT}?title=${term}`)
            .then(response => response.json());
    }
    getHome() {

    }
}

export default ProductsService;
