const express=require('express');
const routes=express.Router();
const mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'123456',
    database:'final'
})

routes.get('/',(req,resp)=>{
    const numbers=req.cookies.numbers;
    const names=req.cookies.names;
    var sql=`select permsg.uname,permsg.gender,permsg.age,permsg.birthday,permsg.isMarry,permsg.address,permsg.personNum,permsg.entryTime,education.education,permsg.\`status\` from education LEFT JOIN  permsg ON education.id=permsg.edu_id LEFT JOIN login ON login.per_id=permsg.id where login.loginame='${names}'`;
    pool.getConnection(function (error,connection) {
        if(error) throw error;
        connection.query(sql,(err,result)=>{
            connection.release();
                resp.render('index',{
                    numbers:numbers,
                    names:names,
                    result:result
                })
            if(err) throw err;
        })
    })
})
module.exports=routes;