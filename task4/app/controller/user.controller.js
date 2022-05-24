// const dealWithData = require("../helper/dealWithData.helper")
const fetchApi = require("../helper/fetchApi")


// const home = res=>{
//     const data = dealWithData.readFromJSON(fetchApi.apiReq(apIURL,res))
//     console.log(data)
//     res.render("home", {
//         pageTitle:"Home Page- User App",
//         hasData: data.length,  //0   
//         data
//     })
// }
apIURL = "https://jsonplaceholder.typicode.com/albums"
const home = (req,res)=>{
   
const data= fetchApi.apiReq(apIURL, (res1, err)=>{
    if(res1) {
       
        console.log("api done")
     
        res.render("home", {
            pageTitle:"Home Page- User App",
            hasData: res1.length , //0   
            res1
            })
    }
    else{
        console.log(err)  
    }
        })
    }
            
// const dealWithData = require("../helper/dealWithData.helper")
// const home = (req,res)=>{
//     const data = dealWithData.readFromJSON("database/user.json")
//     res.render("home", {
//         pageTitle:"Home Page- User App",
//         hasData: data.length,  //0   
//         data
//     })
// }

const add = (req, res)=>{
    res.render("add", {
        pageTitle:"Add User - User App"
    })
}

const single = (req,res)=>{
    const id = req.params.id
    fetchApi.apiReq((apIURL+"/"+id),(res2,err)=>{
        if(res2)
        res.render("single",
        {
            pageTitle:"user Data",
            res2
        }
     ) })

    
}


module.exports = {home, single}