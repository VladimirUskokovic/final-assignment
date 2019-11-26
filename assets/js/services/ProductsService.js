import ApiService from "./ApiService";
import Product from "../components/CategoriesGrid";
import global from "../util/global";

const API_ENDPOINT = "http://127.0.0.1:8000/api/v1/products/";

class ProductsService extends ApiService {
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
        return fetch(`${API_ENDPOINT}${productId}`)
            .then(response => response.json());


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
        // let url = `http://127.0.0.1:8000/offers.json`;
        //
        // return fetch(url, {
        //     method: 'GET',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     }
        // }).then(res => res.json());
    }

    getProductsByCategory(categoryId, order = false) {
        order = {name: 'price', dir: 'asc'};

        let path = `${API_ENDPOINT}?category=${categoryId}`;

        if (order) {
            path = `${path}&orderBy=${order.name}&dir=${order.dir}`;
        }

        return fetch(path)
            .then(response => response.json());

        // return this.products.filter(product => product.categoryId === categoryId);
    }
    getProductsByBrand(brandId) {
        return this.products.filter(product => product.brandId === brandId);
    }
    getBrands() {
        return this.brands;
    }
    searchProduct(term) {
       //  const regTerm = new RegExp(term, 'i');
       //  console.log(this.products.filter(product => product.title));
       // return this.products.filter(product => product.title.match(regTerm));
        return fetch(`${API_ENDPOINT}?title=${term}`)
            .then(response => response.json());

    }
    getHome() {

    }
}

export default ProductsService;
