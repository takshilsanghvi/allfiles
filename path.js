let path=require("path");
let fs=require("fs");
// //path.join()
//input
let inputArr=process.argv.slice(2);
//console.log(inputArr);
let fileName=inputArr[0];
let content =inputArr[1];
//console.log("filename",fileName);
console.log("content",content);
// //current path of directory
let currentpath=process.cwd();
//console.log("current path",currentpath);
// // //path->paths->platform independent
let joinedPath=path.join(currentpath,"abc","def","efg");
console.log("joinedpath",joinedPath);
let filePath=path.join(currentpath,"dir1",fileName);
console.log("filePath",filePath);
fs.writeFileSync(filePath,content);
