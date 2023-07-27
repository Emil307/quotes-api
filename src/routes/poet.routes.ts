const Router = require('express');
const poetController = require('../controllers/poet.controller');

const router = new Router();

router.post('/poet', poetController.createPoet);
router.get('/poets', poetController.getPoets);
router.get('/poet/:id', poetController.getOnePoet);
router.put('/poet/:id', poetController.updatePoet);
router.delete('/poet/:id', poetController.deletePoet);

module.exports = router;
