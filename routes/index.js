const express = require('express');
const router  = express.Router();
const indexController = require('../controllers/index');
//index page
router.get('/', indexController.ShowForm);
//create index page
router.get('/createindex', indexController.CreateIndex);
module.exports = router;
