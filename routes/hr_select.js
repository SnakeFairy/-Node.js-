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
    var sql=`select permsg.*,pay.kbi,pay.perfor,education.education,education.edu_money,station.sta_name,station.sta_money from permsg LEFT JOIN education ON permsg.edu_id=education.id LEFT JOIN login ON login.per_id=permsg.id LEFT JOIN station ON station.id=login.port_id LEFT JOIN pay ON permsg.id=pay.per_id`;
    pool.getConnection(function (error,connection) {
        if(error) throw error;
        connection.query(sql,(err,result)=>{
            connection.release();
            resp.render('hr_select',{
                numbers:numbers,
                names:names,
                result:result
            })
            if(err) throw err;
        })
    })
})

routes.post('/del',(req,resp)=>{
    var perid=req.query.id;
    var sqlpay=`delete from pay where per_id=${perid}`;
    pool.getConnection((error,connection)=>{
        if(error) throw error;
        connection.query(sqlpay,(errs,result)=>{
            if(result){
                var sqlmsg=`delete from login where per_id=${perid}`;
                connection.query(sqlmsg,(err,res)=>{
                    if(res){
                        var sqlupdate=`update permsg set status=0 where id=${perid}`;
                        connection.query(sqlupdate,(err,res)=>{
                            connection.release();
                            if(res){
                                resp.send({code:1});
                            }else{
                                resp.send({code:0});
                            }
                            if(err) throw  err;
                        })
                    }
                    if(err) throw  err;
                })
            }
            if(errs) throw errs;
        })
    })
})

module.exports=routes;