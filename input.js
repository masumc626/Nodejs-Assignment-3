const fs = require('fs');
const http = require('http');

fs.writeFile('index.html',`<h1> Hello World </h1>
<p> This is from Masum </p>`,(err)=>{
if(err){
    console.log(err);
}

const server = http.createServer((req,res)=>{
    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        res.write(data);
        res.end();
    })
}).listen('5000','localhost',(err)=>{
        if(err!=null){
            console.log(err);
        }
    });
});