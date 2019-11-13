import ApiMockUp from "../utilities/ApiMockUp";

class ApiService {
    constructor() {
        this.apiMockUp = new ApiMockUp();
        this.products = this.apiMockUp.products;
        this.categories = this.apiMockUp.categoriesList;
        this.brands = this.apiMockUp.brands;
        this.offers = this.apiMockUp.offers;
    }
}

export default ApiService;
