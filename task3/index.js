
const users = require('./controller/users')
const heads = ["id", "name", "age", "email", "status", "createdAt"]
const yargs = require("yargs")

yargs.command({
    command:"add",
    describe:"add new user data",
    builder:{
        id:{
            type:"number",
            default: Date.now()
        },
        name:{
            type:"string",
            demandOption:true
        },
        email:{
            type:"string",
            demandOption:true
        },
        status:{
            type:"boolean",
            default:false
        },
        age:{
            type:"number",
            demandOption:true
        },
        createdAt:{
            type:"date",
            default:new Date()
        }
    },
    handler: function(argv){
        console.log("add new user");
        let userData = {}
        heads.forEach(h=> userData[h]= argv[h])
        users.addUser(userData)
    }
})
yargs.command({
    command:"showAll",
    describe:"show all users data",
    handler: function(){
        console.log("show all users");
        users.allUsers()
    }
})
yargs.command({
    command:"showUser",
    describe:"show single user data",
    builder:{
        id:{
            type:"number",
            demandOption:true
        }
    },
    handler: function(argv){
        console.log("show single user");
        let userId=argv.id
        users.singleUser(userId)
    }
})
yargs.command({
    command:"delUser",
    describe:"delete single user data",
    builder:{
        id:{type:"number",
        demandOption:true}
    },
    handler: function(argv){
        console.log("delete single user");
        let userId=argv
        users.delUser(userId)       
    }
})
yargs.command({
    command:"editUser",
    describe:"Edit single user data",
    builder:{

        id:{
           type:"number",
           demandOption:true
           },
        name:
           {type:"String",
            demandOption:true
           },
        email:
            {type:"String",
            demandOption:true},
        status:
        { type:"boolean",
              default:false},
        age:{
            type:"number",
            demandOption:true},
        createdAt:{
                type:"date",
                default:new Date()
            }
    },
    handler: function(argv){
        console.log("edit single user");
        let userId=argv.id
        console.log(userId)
        let newData={}
        heads.forEach(h=>newData[h]= argv[h]);
        console.log(JSON.stringify(newData))
        users.editUser1(userId,newData);
    }
})
yargs.argv