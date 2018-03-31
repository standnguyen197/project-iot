var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var historyScan = require('../models/History');

/* GET ALL USER */
router.get('/getHistory', function(req, res, next) {
    historyScan.find({} ,'name email touchid rfid created_date',function (err, person) {
      if (err || !person) {
        res.json({ imes : 'Error'});
      }else{
        res.json(person);
      }
      
    });
  });
module.exports = router;