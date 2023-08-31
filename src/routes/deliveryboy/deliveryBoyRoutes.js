const express = require('express')
const deliveryboyRoute = express.Router()
//Lets define some routes
deliveryboyRoute.get('/getorders',(req,res)=>{
    res.status(200).json({
        msg:"ok from getdelivery boy route"
    });
});
deliveryboyRoute.get('/trackorders',(req,res)=>{
    res.status(200).json({
        msg:"track order"
    });
});

//Named Export

//1. module.exports
exports.deliveryboyRoute = deliveryboyRoute;
