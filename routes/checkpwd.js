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
routes.get('/',(req,resp)=>{
    const numbers=req.cookies.numbers;
    const names=req.cookies.names;
    var sql=`select permsg.uname,permsg.gender,permsg.age,permsg.birthday,permsg.isMarry,permsg.address,permsg.personNum,permsg.entryTime,education.education,permsg.\`status\` from education LEFT JOIN  permsg ON education.id=permsg.edu_id LEFT JOIN login ON login.per_id=permsg.id where login.loginame='${names}'`;
    pool.getConnection(function (error,connection) {
        if(error) throw error;
        connection.query(sql,(err,result)=>{
            connection.release();
            resp.render('checkpwd',{
                numbers:numbers,
                names:names,
                result:result
            })
            if(err) throw err;
        })
    })
})
routes.route('/')
    .get((req,resp)=>{
    resp.render('checkpwd');
})
    .post((req,resp)=>{
        var oldpwd=md5(req.body.oldpwd.trim());
        var cookiepwd=req.cookies.passwords;
        if(oldpwd!=cookiepwd) {
            resp.redirect('/checkpwd');
            return false;
        }
        var newpwd=req.body.newpwd.trim();
        var checkpwds=req.body.checkpwds.trim();
        if(newpwd!=checkpwds||newpwd==''||checkpwds==''){
            resp.redirect('/checkpwd');// 刷新自己
            return false;
        }
        var names=req.cookies.names;
        var sql=`update login set pwd=md5('${newpwd}') where loginame='${names}'`;
        pool.getConnection((error,connection)=>{
            if(error)throw error;
            connection.query(sql,(err,result)=>{
                connection.release();

                if(result){
                    resp.clearCookie('names');
                    resp.clearCookie('passwords');
                    resp.redirect('/')
                }
                if(err) throw err;
            })
        })
    })
module.exports=routes