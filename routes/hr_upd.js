const express=require('express');
const routes=express.Router();
//调用md5-node插件
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
        var uname=req.query.uname;
        var sql=`select * from permsg where uname='${uname}'`;
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(sql,(errs,result)=>{
                connection.release();
                var birthday = result[0].birthday.toString();
                var entryTime = result[0].entryTime.toString();
                resp.render('hr_upd',{
                    birthday:birthday,
                    entryTime:entryTime,
                    result:result
                });
                if(errs) throw errs;
            })
        })
    })
    .post((req,resp)=>{
        const id = req.body.id;
        var uname=req.body.uname;
        var gender=req.body.gender;
        var birthday= req.body.birthday.toString();
        var age=req.body.age;
        var entryTime = req.body.entryTime.toString();
        var isMarry=req.body.isMarry;
        var address=req.body.address;
        var edu_id=req.body.edu_id;
        var status=req.body.status;
        var sql=`update permsg set uname='${uname}',gender=${gender},age=${age},birthday='${birthday}',isMarry=${isMarry},address='${address}',entryTime='${entryTime}',edu_id=${edu_id},\`status\`=${status} where id=${id}`;
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(sql,(errs,result)=>{
                connection.release();

                if(result){
                    resp.redirect('/hr_select')
                }
                if(errs) throw errs;
            })
        })

    })


//允许访问路由实例
module.exports=routes;