const fs = require('fs');
const express = require('express');
const multer = require('multer');
const csv= require('csvtojson');
const upload = multer({dest:'./upload'});
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host:conf.host,
    user: conf.user,
    password:conf.password,
    port:conf.port,
    database:conf.database
});
connection.connect();
var key =''
var value = ''
//customer table
app.get('/api/customers',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
    ;
});
//products table
app.get('/api/products',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
//transaction table
app.get('/api/transaction',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
//Condition A
app.get('/api/ConditionA',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
//Condition B
app.get('/api/ConditionB',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
//Condition C
app.get('/api/ConditionC',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
// InsertCustomer
app.post('/api/InsertCustomer',(req,res)=>{
    let sql = 'INSERT INTO Customer VALUES (?,?,?,?,?)';
    let Type = req.body.Type;
    let Name = req.body.Name;
    let Phone = req.body.Phone;
    let Address = req.body.Address;
    let Gender = req.body.Gender;
    let params = [Type,Name,Phone,Address,Gender];
    connection.query(sql, params,
        (err, rows, fields) =>{
            res.send(rows);
        });
});
app.get('/api/InsertCustomer',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
//InsertTransaction
app.post('/api/InsertTransaction',(req,res)=>{
    let sql = 'INSERT INTO Transaction VALUES (?,?,?,?,?,?)';
    let Type = req.body.Type;
    let TransactionNumber = req.body.TransactionNumber;
    let ProductID = req.body.ProductID;
    let Price = req.body.Price;
    let Date = req.body.Date;
    let CustomerName = req.body.CustomerName;
    let params = [Type, TransactionNumber, ProductID, Price, Date, CustomerName];
    connection.query(sql, params,
        (err, rows, fields) =>{
            res.send(rows);
        });
});
app.get('/api/InsertTransaction',(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
//InsertProduct
app.post('/api/InsertProduct',(req,res)=>{
    let sql = 'INSERT INTO Product VALUES (?,?,?,?)';
    let Type = req.body.Type;
    let Name = req.body.ProductName;
    let ProductID = req.body.ProductID;
    let SupplierName = req.body.SupplierName;
    let params = [Type, Name, ProductID, SupplierName];
    connection.query(sql, params,
        (err, rows, fields) =>{
            res.send(rows);
            console.log(err);
        });
});
app.get('/api/InsertProduct',upload.single('userfile'),(req,res)=>{
    res.send({mesaage: 'Hello Express!'});
});
app.post('/api/csvFile',(req,res)=>{
    res.send('Uploaded! :' + req.file);
    csv({
        noheader : true,
        output:'csv'
    }).fromFile(req.file.path)
    .then((jsonArrayObj) =>{
        for (var index = 0 ; index < jsonArrayObj.length; index++){  
            if (jsonArrayObj[index][0]=='C'){
                let sql = 'INSERT INTO Customer VALUES (?,?,?,?,?)';
                let Type = jsonArrayObj[index][0];
                let Name = jsonArrayObj[index][1];
                let Phone = jsonArrayObj[index][2];
                let Address = jsonArrayObj[index][3];
                let Gender = jsonArrayObj[index][4];
                let params = [Type, Name, Phone, Address, Gender];
                connection.query(sql, params,
                    (err, rows, fields) => {
                        res.send(rows);
                        console.log(err);
                    })
            }

            if (jsonArrayObj[index][0]=='P'){
                let sql = 'INSERT INTO Product VALUES (?,?,?,?)';
                let Type = jsonArrayObj[index][0];
                let Name = jsonArrayObj[index][1];
                let ProductID = jsonArrayObj[index][2];
                let SupplierName = jsonArrayObj[index][3];
                let params = [Type, Name, ProductID, SupplierName];
                connection.query(sql, params,
                    (err, rows, fields) => {
                        res.send(rows);
                        console.log(err);
                    })
            }
            
            if (jsonArrayObj[index][0]=='T'){
                let sql = 'INSERT INTO Transaction VALUES (?,?,?,?,?,?)';
                let Type = jsonArrayObj[index][0];
                let TransactionNumber = jsonArrayObj[index][1];
                let ProductID = jsonArrayObj[index][2];
                let Price = jsonArrayObj[index][3];
                let Data = jsonArrayObj[index][4];
                let CustomerName = jsonArrayObj[index][5];
                let params = [Type, TransactionNumber, ProductID, Price, Data, CustomerName];
                connection.query(sql, params,
                    (err, rows, fields) => {
                        res.send(rows);
                        console.log(err);
                    })
            }
        }
    });
});
app.listen(port,() => console.log(`Listening on port ${port}`));