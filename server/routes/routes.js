const ProductController = require('../controllers/product_controller');

module.exports = (app) => {
  app.get('/api/products', ProductController.fetchProducts);
};
