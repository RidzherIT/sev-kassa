const Router = require('express');
const productController = require('../controller/productController');
const router = new Router();

router.post('/create', productController.create);
router.delete('/delete', productController.delete);
router.get('/getOne', productController.getOne);
router.post('/getAll', productController.getAll);
router.get('/getForAdmin', productController.getForAdmin);

module.exports = router;

