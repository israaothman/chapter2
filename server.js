
// // first: we will import the http module
// const http = require('http');

// // second:  we will use createServer methode to create a server 
// const server = http.createServer((request,respone)=>{
//     // console.log(request.url, request.method); 

//     // respone.setHeader('Content-Type', 'text/html');
//     // respone.write('<p> Hello world!</p>');
//     // respone.end(); 
// });


// //third : we will listen to the requests on a specific port 
// server.listen(3000,()=>{
//     console.log("Listening on port 3000");
// });





// ******************************************** using fs **************************************
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((request, response)=>{
//     response.setHeader('Content-Type', 'text/html');

//      fs.readFile('./views/index.html',(err,data)=>{
//         if(err){
//             console.log(err);
//             response.end();
//         }else{
//             response.write(data);
//             response.end();
//         }
//      })
// });

// server.listen(3000,()=>{
//     console.log("Listening on port 3000");
// });




// **************************************** add statusCode ********************************************
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    response.setHeader('Content-Type', 'text/html');
    
    let path = './views/';

    switch(request.url){
        case '/' :
            path+= 'index.html';
            response.statusCode = 200;
            break;
        case '/about' : 
            path+= 'about.html';
            response.statusCode = 200;
            break;
        default:
            path+= '404.html';
            response.statusCode = 404;   
    
    }

     fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            response.end();
        }else{
            response.write(data);
            response.end();
        }
     })
});

server.listen(3000,()=>{
    console.log("Listening on port 3000");
});