import React, {createContext} from 'react';

const AppContext = createContext({
    products: [],
    product: {},
    offers: [],
    categories: [],
    brands: [],
    getProduct: () => {},
    getProducts: () => {},
    getProductsByCategory: () => {},
    getCategories: () => {},
    getCategory: () => {},
    getBrands: () => {},
    getProductsByBrand: () => {},
    getOffers: () => {},
    sortAscending: () => {},
    sortDescending: () => {}
});

export default AppContext;
