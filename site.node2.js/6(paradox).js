
let {readFile}=require("fs");
readFile("2.txt","utf8",(error,text)=>
{if(error)throw error;
	console.log("содержимое файла",text);
});


const{writeFile}=require("fs");
writeFile("2.txt","there was node",err=>
{
	if(err) console.log(`не удалось записать файл:${err}`);
	else console.log("File written");
})


const{readFileSync}=require("fs");
console.log("Содержимое файла:",readFileSync("2.txt","utf8"));