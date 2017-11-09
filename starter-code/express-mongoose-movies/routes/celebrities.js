const express = require('express');
const Celebrities = require('../models/celebrity');
const router = express.Router();

router.get('/', (req, res, next) => {
  Celebrities.find({}, (err, celebrities) => {
    if (err) {
      return next(err);
    }
    res.render('celebrities/index', {
      celebrities: celebrities,
      title: 'Celebrities'
    });
  });
});


module.exports = router;
