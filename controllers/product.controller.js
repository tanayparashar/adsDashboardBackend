const productService = require('../services/product.service')

const add = async (req, res, next) => {
  try{
    await productService.add(req.body)
    res.status(200);
    res.send({message: "Created"});
  }
  catch(err) {
    res.status(400);
    console.log(err)
    var message = { message : err.message };
    res.send(message);
  }
}

const getAll = async (req, res, next) => {
  try{
    const products = await productService.getAll()
    res.status(200);
    res.json(products);
  }
  catch(err) {
    res.status(400);
    console.log(err)
    var message = { message : err.message };
    res.send(message);
  }
}

module.exports = {
  add,
  getAll
}