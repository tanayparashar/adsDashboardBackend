const Product = require('../models/product.model')

async function add(data) {
    try {  
        const product = new Product({...data});
        await product.save();
    }
    catch(err) {
        throw new Error(err.message)
    }
}

async function getAll() {
    try { 
        const products = await Product.find()
        if(products.length===0) {
            throw new Error('No Products Found')
        }
        return products;
    }
    catch(err) {
        throw new Error(err.message)
    }
}

module.exports = {
    add,
    getAll
}