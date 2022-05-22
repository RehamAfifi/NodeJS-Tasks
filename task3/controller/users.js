const dealWithJson = require("./dealWithJson")
const chalk = require("chalk")

const addUser = (userData) => {
    const data = dealWithJson.readData()
    data.push(userData)
    dealWithJson.writeData(data)
}

const allUsers = () => {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    data.forEach(user=>{
        console.log(chalk.green(`id: ${user.id} - name: ${user.name}-age: ${user.age}
---------------------------------`))
    })
}
const singleUser = (userId) => {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    const uesrIndex=data.findIndex(user=>
    user.id==userId);
    console.log(uesrIndex)
    console.log(chalk.green(JSON.stringify(data[uesrIndex])))
    if(uesrIndex==-1)return console.log(chalk.red("invalid id"));
}

const editUser1 = (userId,newData)=> {
    const data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    const uesrIndex=data.findIndex(user=>
    user.id==userId);
    console.log(chalk.green( JSON.stringify(data[uesrIndex])))
    data.splice(uesrIndex,1,newData)
    dealWithJson.writeData(data)
    console.log(chalk.green( JSON.stringify(data) ))
    if(uesrIndex==-1)return console.log(chalk.red("invalid id"));
 
}

const delUser = (userId)=>{
    data = dealWithJson.readData()
    if(data.length==0) return console.log(chalk.red("no users yet"));
    const uesrIndex=data.findIndex(user=>
    user.id==userId);
    console.log(uesrIndex)
    data.splice(uesrIndex,1);
    console.log(chalk.green( JSON.stringify(data)));
    dealWithJson.writeData(data)
    if(uesrIndex==-1)return console.log(chalk.red("invalid id"));
    }

module.exports = {addUser, editUser1, allUsers, singleUser, delUser}