const express = require('express');
const app = express();
// Named Import
const {adminRoute }= require('./src/routes/admin/adminRoute');
const { deliveryboyRoute } = require('./src/routes/deliveryboy/deliveryBoyRoutes');
app.use('/customer',adminRoute);
app.use('/deliveryboy',deliveryboyRoute);
let port = 4000;
app.listen(port,()=>{
    console.log('The server is listening on',port);
});