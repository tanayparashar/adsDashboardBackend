var express = require('express');
var router = express.Router();
const campaignController = require('../controllers/campaign.controller');

router.get('/', campaignController.getAll);
router.post('/', campaignController.add);
router.put('/:id', campaignController.update);
router.delete('/:id', campaignController._delete);

module.exports = router;