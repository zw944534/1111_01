// let a = 1;
// setInterval(function(){console.log(a++);},10)

const http = require("http");
// http.createServer(function(request,response){
// 	console.log(request.url);
// 	console.log("接收到網頁請求");
// 	response.writeHead(200,{"Content-Type":"text/plain"});
// 	response.write("Hello World");
// 	response.end();

// }).listen(3000);
// console.log("Server已開啟port");



// var http = require("http");


//  node.js 載入模組


// http.createServer(function(request,response){
// 	console.log(request.url);
// 	if(request.url=="/"){
// 		console.log("request to open index");
// 		response.writeHead(200,{"Content-Type":"text/HTML"});
// 		response.write("<h1>This is index.</h1>");
// 		response.end();
// 	}else if(request.url=="/market"){
// 		console.log("request to open market");
// 		response.writeHead(200,{"Content-Type":"text/HTML"});
// 		response.write("<h1>This is market.</h1>");
// 		response.end();
// 	}else{
// 		console.log("invalid request");
// 		response.writeHead(404,{"Content-Type":"text/HTML"});
// 		response.write("<h1>Invalid request</h1>");
// 		response.end();
// 	}
// }).listen(process.env.PORT || 3000);
// console.log("Server has been open on port 3000");
http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url == '/'){
// 路由
    // 資料庫
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>index</h1>");
    response.end();
  }else if(request.url == '/search'){
     console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>search</h1>");
    response.end();
  }else if(request.url=='/market'){
  	console.log("接收到網頁請求！");
	response.writeHead(200, {"Content-Type": "text/HTML"});  
  	response.write("<h1>market</h1>");
	response.end();

  }else if(request.url=='/center'){
  	console.log("接收到網頁請求！");
	response.writeHead(200, {"Content-Type": "text/HTML"});  
  	response.write("<h1>center</h1>");
    response.end();
  }else if(request.url=='/job'){
  	console.log("接收到網頁請求！");
	response.writeHead(200, {"Content-Type": "text/HTML"});  
  	response.write("<h1>job</h1>");
  	response.end();
  }else if(request.url=='/baseball'){
  	console.log("接收到網頁請求！");
	response.writeHead(200, {"Content-Type": "text/HTML"});  
  	response.write("<h1>baseball</h1>");
  	response.end();
  }else{
  	console.log("接收到網頁請求！");
	response.writeHead(404, {"Content-Type": "text/HTML"});  
  	response.write("<h1>error</h1>");
  	response.end();
  }

  
}).listen(process.env.PORT ||3000);
console.log("Server已開啟port: 3000.");

