let path=require("path");
let fs=require("fs");
let srcFilePath="//Users//takshil//Desktop//pepcoding web//Module_1_FS//fs.js"
let destDir="//Users/takshil/Desktop/pepcoding web/screenshots"
let tobeCopiedFileName =path.basename(destDir);
//console.log(tobeCopiedFileName);
let destPath=path.join(destDir,tobeCopiedFileName);
console.log(destPath);
fs.copyFileSync(srcFilePath,destPath);
//console.log("file copied");