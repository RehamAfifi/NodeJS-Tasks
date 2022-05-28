const dealWithData = require("../helper/dealWithData.helper")
const home = (req,res)=>{
    const data = dealWithData.readFromJSON("database/user.json")
    const id=Date.now()
    res.render("home", {
        pageTitle:"Home Page- User App",
        hasData: data.length,  //0   
        data,
        id
    })
}

const addPostMethod= (req, res)=>{
    res.render("addPost", {
        pageTitle:"Add User - User App",
        value:req.body.value,
        TransactionType : ["add", "withdrow"]
    })
}

const addPostMethodLogic = (req,res)=>{
    const customer = { id:Date.now(), ...req.body } 
    const data = dealWithData.readFromJSON("database/user.json")
    data.push( customer )
    dealWithData.writeToJSON(data, "database/user.json")
    res.redirect("/")
}
const single = (req,res)=>{
    const customer = dealWithData.readFromJSON("database/user.json").find(d=> d.id == req.params.id)
    res.render("single",
    { pageTitle:"user Data", customer}
    )
}
// const delUser =  (req,res)=>{
//     const id = req.params.id
//     const data = dealWithData.readFromJSON("database/user.json")
//     const afterDel = data.filter(d=> d.id!=id)
//     dealWithData.writeToJSON(afterDel, "database/user.json")
//     res.redirect("/")
// }
// const editUser = (req,res)=>{
//     const user = dealWithData.readFromJSON("database/user.json").find(d=> d.id == req.params.id)
//     res.render("edit",
//     { 
//         pageTitle:"user Data", 
//         user,
//         userTypes:["admin", "user"]
//     }
//     )    
// }
// const editUserLogic = (req,res)=>{
//     const data = dealWithData.readFromJSON("database/user.json")
//     const userIndex = data.findIndex(d=> d.id == req.params.id)
//     data[userIndex] = {...req.body, id:data[userIndex].id}
//     dealWithData.writeToJSON(data, "database/user.json")
//     res.redirect(`/users/${data[userIndex].id}`)
// }
const addTransaction=(req,res)=>{
    const customer = dealWithData.readFromJSON("database/user.json").find(d=> d.id == req.params.id)
    res.render("addTransaction", {
        pageTitle:"Add Transaction - User App",
        customer,
        // value:req.body.value,
         TransactionType : ["add", "withdrow"]
    })

}
const addTransactionLogic=(req,res)=>{
         const data = dealWithData.readFromJSON("database/user.json")
        const custIndex = data.findIndex(d=> d.id == req.params.id)
        data[custIndex] = {...req.body, id:data[custIndex].id}
        dealWithData.writeToJSON(data, "database/user.json")
        res.redirect(`/`)
}        
module.exports = { home, single,  addPostMethod, addPostMethodLogic ,addTransaction,addTransactionLogic }