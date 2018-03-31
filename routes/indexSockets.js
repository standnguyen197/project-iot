module.exports = (io) => { 
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Auth = require('../models/Auth');

/* GET ALL BOOKS */
router.get('/:touchid/:rfid', function(req, res, next) {
    res.locals.req = req;
    res.json({
        imes: 'Kết nối socket'
    })
const touchid = req.params.touchid;
const rfid = req.params.rfid;

Auth.count({ $and: [{ touchid },{ rfid }]},  function (err, count) {
    if (count == 0) {
        io.sockets.emit('updateSocket' , {imes: 0})
    }else{
        Auth.find({ $and: [{ touchid },{ rfid }]}, 'name email phone birthday address touchid rfid', function (err, user) {
            if (err) {
                return next(err)
            }

            io.sockets.emit('updateSocket' ,  {imes: 1,user})
          });
    }
  });
});

return router;
}
