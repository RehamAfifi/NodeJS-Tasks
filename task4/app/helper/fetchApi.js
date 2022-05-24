const https = require("https")
// const apIURL = "https://jsonplaceholder.typicode.com/posts"
const apiReq = (url, cb)=>{
    const req = https.request(url, (res)=>{
        let result = ""
        res.on("data", (x)=> result+=x.toString())
        res.on('end', ()=> cb(JSON.parse(result), false))
    })
    req.on("error", (err)=> cb(false, err))
    req.end()
}

// apiReq(apIURL, (res, err)=>{
//     if(res) {
//         console.log("api done")
//         console.log(res)
//     }
//     else{
//         console.log("there is an error")
//         console.log(err);
//     }
// })
module.exports={apiReq}