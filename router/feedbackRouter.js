const Router = require('express');
const feedbackController = require('../controller/feedbackController');

const router = new Router();

router.post('/create', feedbackController.create);
router.get('/getRandom', feedbackController.getRandom);

module.exports = router;

