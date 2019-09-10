import ApiMockUp from "../utilities/ApiMockUp";

class ApiService {
    constructor() {
        this.apiMockUp = new ApiMockUp();
        this.products = this.apiMockUp.products;
        this.categories = this.apiMockUp.categoriesList;
    }
}

export default ApiService;
