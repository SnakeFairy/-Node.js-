const express=require('express');
const routes=express.Router();
const md5=require('md5-node');
const mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'123456',
    database:'final'
})

routes.route('/')
    .get((req,resp)=>{
        resp.render('login.ejs',{});
    })
    .post((req,resp)=>{
        const numbers=req.body.numbers.trim();
        const names=req.body.names.trim();
        const passwords=md5(req.body.passwords.trim());
        var sql=`select * from login where port_id=${numbers} and loginame='${names}' and pwd='${passwords}'`;
        pool.getConnection(function (error,connection) {
            if (error) throw error;
            connection.query(sql,(err,result)=>{
                connection.release();
                if(result.length !=0){
                    resp.cookie('numbers',numbers,{maxAge:86400000,httpOnly:true})
                    resp.cookie('names',names,{maxAge:86400000,httpOnly:true})
                    resp.cookie('passwords',passwords,{maxAge:86400000,httpOnly:true})
                    resp.redirect('/index')
                }else{
                    resp.redirect('/');
                }
                if (err) throw err;
            })
        })
    })

module.exports=routes;