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
    sortProducts: () => {},
    // sortAscending: () => {},
    // sortDescending: () => {}
});

export default AppContext;
