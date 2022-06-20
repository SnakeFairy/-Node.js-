const express=require('express');
const routes=express.Router();

routes.get('/',(req,resp)=>{
    resp.clearCookie('numbers');
    resp.clearCookie('names');
    resp.clearCookie('passwords');
    resp.redirect('/');
})

module.exports=routes;