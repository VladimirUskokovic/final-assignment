import React, {createContext} from 'react';

const ProductContext = createContext({
    products: [],
    product: {},
    offers: [],
    categories: []
});

export default ProductContext;
