const{request}=require("http");
let requestStream=request({
   hostname:"eloquentjavascript.net",
   path:"/20_node.html",
   method:"GET",
   headers:{Accept:"text/html"}
   },
response=>
{
	console.log("server answer with code",response.statusCode);
});
requestStream.end();