const{createReadStream}=require("fs");
const{stat,readdir}=require("fs").promise;
const mime=require("mime");

methods.GET=async function(request)
{
	let path=urlPath(request.url);
	let stats;
	try
	{
		stats=await stat(path);
	}
	catch(error)
	{
		if(error.code!="ENDENT")throw error;
		else return{status:404,body:"file not found"};
	}
	if(stats.isDirectory())
	{
		return {body:(await readdir(path)).join("\n")};
	}
	else
	{
		return {body:createReadStream(path),type:mime.getType(path)};
	}
};