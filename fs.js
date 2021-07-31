// implementation -> files/folder interact
// /directory
//files -> read/write/update delete
const { notDeepEqual } = require("assert");
let fs=require("fs");
//let content=fs.readFileSync("f1.text");
//buffer ->video,audio,text
//console.log("content :"content);
//+ -> concatinate ->string =>text
//console.log(""+content);
//write ->writeFileSync
// file does not exist ->file create , content put
//file does not exist -> content override
fs.writeFileSync("abc.txt","Not happy Today");
//update
fs.appendFileSync("abc.txt","Why not happy");
//fs.unlinkSync("abc.txt");
//console.log("File Removed");
//****************Directory*****************
//create
//fs.mkdirSync("dir1");
//delete
//fs.rmdirSync("myDirectory");
//path -> check does it exist or not
//let doesExist=fs.existsSync("fs.js");
//console.log("this path exists?",doesExist);
//path->belongs to directory or file
//let statsOfAPath=fs.lstatSync("dir1");
//console.log("stats",statsOfAPath);
//console.log("is file?",statsOfAPath.isFile());
//console.log("is dir",statsOfAPath.isDirectory());
// // directory ->content
//let address="//Users//takshil//Desktop//pepcoding web//Module_1_FS//dir1"
//let content =fs.readdirSync(address);
//console.log("directory content",content);
//copy
//firstParam->srcFilePath,destFilePath
let srcFilePath="/Users/takshil/Desktop/pepcoding web/arrayadv.js";
let destDir=""
