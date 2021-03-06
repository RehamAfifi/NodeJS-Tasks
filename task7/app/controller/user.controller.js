// const dealWithData = require("../helper/dealWithData.helper")'
require('../../database/connectDB')
//require("dotenv").config()
const userModel = require('../../database/models/user.model')

class User {
    static home = async(req, res) => {
    try{
        const customers = await userModel.find()
        res.render("home", {
            pagetTitle:"Show All Customers", 
            customers,
            hasCustomers: customers.length
        })

    }
    catch(e){
        res.render("err404", {
            pageTitle:"error page",
            errMsg:e.message
        })
    }        
}
    

    static addPostMethod = (req, res) => {
        res.render("addPost", {
            pageTitle: "Add Customer - User App",
            TransactionType: ["add", "withdrow"]
        })
    }

    static addPostMethodLogic = async (req, res) => {
         try{                    
            const customer = await new userModel({...req.body}).save(function(err,result){
                if (err){
                    console.log(err);
                }
                else{
                    console.log(result)
                }
            })
           
            console.log(customer)
            res.redirect('/')
         }
        catch(e){
            res.render("err404", {
                pageTitle:"Error in Database", 
                errMsg:e.message
            })
        }
        
    }
    
    static single = async(req, res) => {

        // try{
        //     const customer = await userModel.findById(req.params.id)
        //     res.render("single", {
        //                         pageTitle: customer ? `customer ${customer.name} data` : "customer not found",
        //                         customer
        //     })
        // }
        // catch(e){
        //     res.render("err404", {
        //         pageTitle:"error in db",
        //         errMsg:e.message
        //     })
        // }
    }

    static addTransaction = async(req, res) => {

        //     try{        
        //         const customer = await userModel.findById(req.params.id)
        //     res.render("addTransaction",
        //      {pageTitle: customer ? `customer ${customer.name} data` : "customer not found",
        //     customer,  TransactionType: ["add", "withdrow"]}
        //    )  }
        
        //     catch(e){
        //         res.render("err404", {
        //             pageTitle:"Error in Database", 
        //             errMsg:e.message
        //         })
        //     }
            
        }
    
    static addTransactionLogic =async (req, res) => {
           
        //     try{        
        //         const customer = await userModel.findByIdAndUpdate(req.params.id, req.body)

        //     res.render("home",
        //      {pageTitle: customer ? `customer ${customer.name} data` : "customer not found",
        //     customer,  TransactionType: ["add", "withdrow"]}
        //    )  }
        
        //     catch(e){
        //         res.render("err404", {
        //             pageTitle:"Error in Database", 
        //             errMsg:e.message
        //         })
        //     }

}}
module.exports = User