const express=require('express');
const routes=express.Router();
const mysql=require('mysql');
var pool=mysql.createPool({
//    最大链接数
    connectionLimit:10,
//    主机
    host:'localhost',
//    数据库登陆用户名
    user:'root',
//    登录密码
password:'123456',
//    当前项目链接的数据库
    database:'final'
})

//设置路由规则
routes.route('/')
    .get((req,resp)=>{
        const numbers=req.cookies.numbers;
        const names=req.cookies.names;
        var sql=`select (education.edu_money+station.sta_money+pay.kbi+pay.perfor-350) as zong, permsg.uname,pay.kbi,pay.perfor,pay.status,education.edu_money,station.sta_money from permsg LEFT JOIN education ON permsg.edu_id=education.id LEFT JOIN pay ON permsg.id=pay.per_id LEFT JOIN station ON station.id=pay.sta_id WHERE permsg.\`status\`=1`;
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(sql,(errs,result)=>{
                connection.release();
                resp.render('acc_paylist',{
                    numbers:numbers,
                    names:names,
                    result:result,
                });
                if(errs)throw errs;
            })
        })
    })
    .post((req,resp)=>{
        var pay_id=req.body.id;
        var kbi=req.body.kbi;
        var perfor=req.body.perfor;
        var sql=`update pay set kbi=${kbi},perfor=${perfor} where id=${pay_id}`;
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(sql,(errs,result)=>{
                connection.release();
                if(result){
                    resp.redirect('/acc_paylist')
                }
                if(errs) throw errs;
            })
        })
    })


//允许访问路由实例
module.exports=routes;