const fs = require("fs")
const writeToJSON = ( data, fileName ) =>{
    try{
        fs.writeFileSync(fileName, JSON.stringify(data))
    }
    catch(e){
        console.log(e.message);
    }
}
const readFromJSON = (fileName) =>{
    let data = []
    try{
        data = JSON.parse(fs.readFileSync(fileName))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data=[]
    }
    return data
}
module.exports={ writeToJSON, readFromJSON}