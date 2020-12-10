var express = require('express');
var router = express.Router();
const artCtrl = require('../controllers/api/art');


/* GET users listing. */


router.get('/art', artCtrl.index)
router.get('/art/:id', artCtrl.show)
router.post('/art', artCtrl.create)
router.put('/art/:id', artCtrl.update)
router.delete('/art/:id', artCtrl.delete)


module.exports = router;




module.exports = router;
