var express=require("express");
var app=express();
var port=3000; //nếu trùng thì đổi port
var expressLayouts = require('express-ejs-layouts'); //gọi thư viện layout

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
