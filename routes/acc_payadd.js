const express=require('express');
const routes=express.Router();
const util=require('util');
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
        var numbers=req.cookies.numbers;
        //    拼接sql语句
        var sql=`select (education.edu_money+station.sta_money+pay.kbi+pay.perfor-350) as zong,pay.id,pay.per_id,permsg.uname,pay.kbi,pay.perfor,education.edu_money,station.sta_money from permsg LEFT JOIN education ON permsg.edu_id=education.id LEFT JOIN pay ON permsg.id=pay.per_id LEFT JOIN station ON station.id=pay.sta_id  where permsg.\`status\`=1 and pay.kbi=0 and pay.perfor=0`;
        // console.log(sql);
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(sql,(errs,result)=>{
                connection.release();
                //    渲染视图
                resp.render('acc_payadd',{
                    numbers:numbers,
                    result:result
                })
                if(errs)throw errs;
            })
        })
    })


    .post((req,resp)=>{
        //    获取未录入薪资的员工 id以及录入的薪资
        var pay_id=req.body.id;
        var kbi=req.body.kbi;
        var perfor=req.body.perfor;

        //   拼接sql语句
        var sql=`update pay set kbi=${kbi},perfor=${perfor} where id=${pay_id}`;
        // console.log(sql);
        //    执行sql语句
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