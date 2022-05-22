const fs = require("fs")

const chalk = require("chalk")
const writeData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data))
    console.log(chalk.green("DB updated"))
}

const readData = () =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync("data.json"))||[]
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
module.exports = { writeData, readData }