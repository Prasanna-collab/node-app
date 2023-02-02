const os = require("os");
const fs = require("fs");
const http = require("http");

// fs.readFile("sample.txt","UTF8",(err,fileData)=>{
//      if(err)
//      console.log(err)
//      else
//      console.log(fileData)
// })

// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.loadavg());
// console.log(os.hostname());
const PORT = 8000;
var date = new Date();
fs.writeFile("sample.txt", `${date}`, (err) => {
  if (err) throw new Error();
  else console.log("You data Saved Successfully");
});

fs.readFile("sample.txt", "UTF8", (err, data) => {
  if (err) throw new Error();
  else {
    http
      .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        // res.write(JSON.stringify({message:"this is Json data"}))
        res.end();
      })
      .listen(PORT, () => {
        console.log("You are listening Port " + PORT);
      });
  }
});
