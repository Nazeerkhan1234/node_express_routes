const express = require('express')
const adminRoute = express.Router()
//Lets define some routes
adminRoute.get('/getproducts',(req,res)=>{
    res.status(200).json({
        msg:"ok"
    });
});
adminRoute.get('/getorders',(req,res)=>{
    res.status(200).json({
        msg:"ok2"
    });
});
//Named Export
module.exports = {adminRoute:adminRoute}
