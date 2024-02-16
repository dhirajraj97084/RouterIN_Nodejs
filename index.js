const http=require('http');
const url=require('url');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('<h1> welcome to Home page </h1>');
    } else if(req.url=='/about'){
        res.end('<h1> welcome to About page </h1>');
    }else if(req.url=='/contact'){
        res.end('<h1> welcome to Contact page </h1>');
    }
    else{
        res.writeHead(404 , "<h1> your page is not found </h1> ");
        res.end();
    }
})
server.listen(2700,'127.0.0.1', ()=>{
    console.log('successful your code run');
})



