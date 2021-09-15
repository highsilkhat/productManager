const { Product } = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    })
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })

    .then(product => res.json(product))
    .catch(err => res.json(err));
}

module.exports.getAllProducts = (req, res) => {
    
    Product.find({})
    .then(allProducts => res.json({results: allProducts}))
    .catch(err => res.json({message: "Tank, I need an exit!", err}))
}
