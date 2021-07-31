let fs=require("fs");
let inputArr=process.argv.slice(2);
//console.log(inputArr);
let fileArr=inputArr;
for(let i=0;i<fileArr.length;i++){
    let ans=fs.existsSync(fileArr[i]);
    if(ans==false){
        console.log("file doesn't exists");
        return;
    }
}
let content="";
for(let i=0;i<fileArr.length;i++){
    content=content+fs.readFileSync(fileArr[i])+"\n";
}
console.log(content);