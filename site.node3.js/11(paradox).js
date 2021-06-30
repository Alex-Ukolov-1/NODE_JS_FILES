const{parse}=require("url");
const{resolve,sep}=require("path");

const baseDirectory=process.cwd();

function urlPath(url)
{
	let {pathname}=parse(url);
	let path=resolve(decodeURIComponent(pathname).slise(1));
	if(path!=baseDirectory&&!path.startWith(baseDirectory+sep))
	{
		throw{status:403,body:"forbidden"};
	}
	return path;
}