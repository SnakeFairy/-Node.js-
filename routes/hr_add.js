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
            resp.render('hr_add',{
                numbers:numbers,
                names:names,
                result:result
            })
            if(err) throw err;
        })
    })
})
//设置路由规则
routes.route('/')
    .get((req,resp)=> {
        resp.render('hr_add')
    })
    .post((req,resp)=>{
        var per_id=req.body.per_id; //用户id
        var loginame=req.body.loginame; //登录账号
        var pwd=req.body.pwd; //密码
        var uname=req.body.uname;  //姓名
        var gender=req.body.gender; //性别
        var age=req.body.age;  //年龄
        var birthday=req.body.birthday.toString();    //出生年月
        var isMarry=req.body.isMarry  //婚否
        var address=req.body.address;  //现居住地
        var personNum=req.body.personNum; //身份证号码
        var edu_id=req.body.edu_id;  //学历
        var port_id=req.body.port_id; //岗位
        var status=req.body.status;     //在职状态
        var entryTime=req.body.entryTime.toString();  //入职时间


        //拼接sql语句
       var sqlpermsg=`INSERT INTO permsg(id,uname,gender,age,birthday,isMarry,address,personNum,entryTime,edu_id,status) VALUES (${per_id},'${uname}',${gender},${age},'${birthday}',${isMarry},'${address}',${personNum},'${entryTime}',${edu_id},${status})`;
        console.log(sqlpermsg);
    //    执行sql语句
        pool.getConnection((error,connection)=>{
            if(error) throw error;
            connection.query(sqlpermsg,(errs,result)=>{

                    var sqllogin=`INSERT INTO login(id,per_id,loginame,pwd,port_id) VALUES (${per_id},${per_id},'${loginame}','${pwd}',${port_id})`;
                    console.log(sqllogin)
                    connection.query(sqllogin,(err,resps)=>{
                        connection.release();
                        if (result) {
                            resp.redirect('/hr_select');
                        }
                        if(err) throw err;
                    })

                if(errs) throw errs;
            })
        })
    })


//允许访问路由实例
module.exports=routes;