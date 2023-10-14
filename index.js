var express=require("express");
var app=express();
var port=3000; //nếu trùng thì đổi port
var expressLayouts = require('express-ejs-layouts'); //gọi thư viện layout
var nodemailer=require("nodemailer");


app.use(express.static("public"));  //dường dẫn thư mục public
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(expressLayouts); // sẹ chạy trang có tên layout


app.set("view engine","ejs"); // đuôi mở rộng ejs
app.set("views","./views"); //thư mục view
app.listen(port);




//duong dan trang chu
app.get("/",function(req,res){  
    res.render("trangchu");
});

//duong dan trang gioi thieu
app.get("/gioi-thieu",function(req,res){
    res.render("gioithieu");
});

app.get("/email",function(req,res){
    res.render("partials/email");
});

app.post("/post-email",function(req,res){
    //cai dat email
    var option={
        service: 'gmail', //dung gmail
        auth:{
            user:'nonameok2010@gmail.com',
            pass:'gmhb uqea cymg hovo'
        }
    };
    var transporter=nodemailer.createTransport(option);
    transporter.verify(function(error,success){
        if(error){
            console.log(error);
        }else{
            console.log("kết nối thành công");
        }
    });
    var mail={
        from: req.body.emailgui,
        to: req.body.emailnhan,
        subject: req.body.chude,
        html:req.body.noidung,
    };

    transporter.sendMail(mail,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: "+info.response);
        }
    });

    res.redirect("/email");
});