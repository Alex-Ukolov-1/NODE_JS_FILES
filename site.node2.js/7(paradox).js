const{createServer}=require("http");
let server=createServer((request,response)=>
{
	response.writeHead(200,{"Content-Type":"text/html"});
	response.write(`<h1>HI!</h1>
    <p>you find<code>${request.url}</code></p>
		`);
	response.end();
    });
server.listen(8000);
console.log("started listened!(port 80000)");