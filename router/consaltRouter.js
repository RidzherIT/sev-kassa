const Router = require('express');
const consaltController = require('../controller/consaltController');
const router = new Router();


router.post('/create', consaltController.create);
router.get('/getAll', consaltController.getAll);
router.put('/update', consaltController.update);
router.delete('/delete', consaltController.delete);

module.exports = router;

