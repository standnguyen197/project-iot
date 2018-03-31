var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Auth = require('../models/Auth.js');
var md5 = require('md5');


/* SAVE Auth Đăng ký*/
router.post('/dangKy', function(req, res, next) {
  Auth.count({email: req.body.email}, function(err , count){
    if(count >= 1){
      res.json({imes: 0})
    }else{
      var email = req.body.email;
      var phone = req.body.phone;
      var name = req.body.name;
      var birthday = req.body.birthday;
      var address = req.body.address;
      var touchid = req.body.touchid;
      var rfid = req.body.rfid;
      var password = req.body.password;


      if(req.body.email == 'admin@gmail.com'){

        var userdata = {
          email,
          phone,
          name,
          address,
          birthday,
          touchid,
          rfid,
          password,
          role_id: '1'
        }
       
      }else{
        var userdata = {
          email,
          phone,
          name,
          address,
          birthday,
          touchid,
          rfid,
          password
        }
      }
      Auth.create(userdata, function (err, post) {
        if (err){
           res.json({imes: 0});
        }else{
         res.json({post,imes: 1});
        }
      });
    }
  });

});

/* SAVE Auth Đăng nhập*/
router.post('/dangNhap', function(req, res, next) {
const email = req.body.email;
const password = req.body.password;
  Auth.find({ $and: [{ email },{ password }]}, function (err, results) {
   if(err){
      res.json({
        imes:0
      })
   }else{
     if(results.length == 0){
      res.json({
        imes: 0
      })
     
      }else{

      res.json({
        imes: 1,
        results
      })
     }
   }
})

});

/* GET ALL USER */
router.get('/getAuth', function(req, res, next) {
  Auth.find({} ,'_id name email phone address touchid rfid',function (err, products) {
    if (err) {
      return next(err);
    }else{
      res.json(products);
    }
    
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/getAuth/:id', function(req, res, next) {
  Auth.findById(req.params.id, 'name email phone birthday address touchid rfid', function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/delAuth/:id', function(req, res, next) {
  Auth.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/update/:id', function(req, res, next) {
  console.log(req.body);
  var logData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    birthday:req.body.birthday,
    touchid: req.body.touchid,
    rfid: req.body.rfid,
    password: md5(req.body.password)
  }

  Auth.findByIdAndUpdate(req.params.id, logData, function (err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});
module.exports = router;
