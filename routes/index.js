const express = require('express');
const router  = express.Router();
const indexController = require('../controllers/index');
const apiController = require('../controllers/api/search');
//index page
router.get('/', indexController.ShowForm);
//create index page
router.get('/createindex', indexController.CreateIndex);
//searching route
router.post('/api/search', apiController.doSearch);
module.exports = router;
