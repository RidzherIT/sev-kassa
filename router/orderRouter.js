const Router = require('express');
const orderController = require('../controller/orderController');
const router = new Router();

router.post('/create', orderController.create);
router.put('/updatePaid', orderController.updatePaid);
router.put('/updateSuccess', orderController.updateSuccess);
router.delete('/delete', orderController.delete);
router.get('/get', orderController.getAll);

module.exports = router;

