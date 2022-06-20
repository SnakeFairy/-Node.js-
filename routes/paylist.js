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

    var numbers=req.cookies.numbers;
    var names=req.cookies.names;

    var sql=`select permsg.uname,station.sta_name,pay.\`year\`,pay.\`month\`, education.edu_money, station.sta_money,pay.perfor,pay.kbi,(education.edu_money+station.sta_money+pay.kbi+pay.perfor-350) as zong,pay.status from station LEFT JOIN pay ON station.id=pay.sta_id LEFT JOIN permsg ON permsg.id=pay.per_id LEFT JOIN education ON permsg.edu_id=education.id LEFT JOIN login ON login.per_id=pay.per_id  where login.loginame='${names}'`;

    pool.getConnection((error,connection)=>{
        if(error) throw error;
        connection.query(sql,(err,result)=>{
            connection.release();
            resp.render('paylist',{
                numbers: numbers,
                result:result,
            });
            if(err) throw err;
        })
    })
    })

module.exports=routes