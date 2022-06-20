const express=require('express');
const routes=express.Router();
const util=require('util');
const mysql=require('mysql');
var pool=mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'123456',
    database:'final'
})

routes.get('/',(req,resp)=>{
        var selectsta=`select * from station`;
        // console.log(selectsta);
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(selectsta,(errs,result)=>{
                var selectedu=`select * from education`;
                // console.log(selectedu);
                connection.query(selectedu,(err,res)=>{
                    connection.release();
                    //    渲染视图
                    resp.render('acc_rank',{
                        result:result,
                        res:res
                    })
                    if(err)throw err;
                })
                if(errs)throw errs;
            })
        })
    })
routes.post('/edu',(req,resp)=>{
        var edu_id=req.query.id;
        var edu_money=req.body.edu_money;
        var updateedu=`update education set edu_money=${edu_money} where id=${edu_id}`;
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(updateedu,(errs,result)=>{
                    connection.release();
                   resp.redirect('/acc_rank')

                if(errs)throw errs;
            })
        })
    })
routes.post('/sta',(req,resp)=>{
    var sta_id=req.query.id;
    var sta_money=req.body.sta_money;
    var updatesta=`update station set sta_money=${sta_money} where id=${sta_id}`;
    pool.getConnection((error,connection)=>{
        connection.query(updatesta,(err,res)=>{
            connection.release();
            resp.redirect('/acc_rank')
            if(err)throw err;
        })
    })
})

module.exports=routes;