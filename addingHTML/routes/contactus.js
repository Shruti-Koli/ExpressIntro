const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/cotactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

// /admin/add-product => POST
router.post('/cotactus', (req, res, next) => {
  console.log(req.body);
  res.redirect('/success');
});

module.exports = router;