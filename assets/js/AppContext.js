import React, {createContext} from 'react';

const AppContext = createContext({
    products: [],
    product: {},
    offers: [],
    categories: [],
    getProduct: () => {},
    getProducts: () => {},
    getProductsByCategory: () => {}
});

export default AppContext;
