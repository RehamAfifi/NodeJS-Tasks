const dealWithData = require("../helper/dealWithData.helper")
const dbCon = require('../../database/connectDB')
const ObjectId = require("mongodb").ObjectId
class User {
    static home = (req, res) => {
        dbCon((err, db) => {
            if (err) res.send(err)
            db.collection("data").find().toArray((error, customers) => {
                if (error) res.send(error)
                res.render("home", {
                    pageTitle: "Home Page- User App",
                    hasData: customers.length,  //0   
                    customers
                })
            })
        })
    }



    static addPostMethod = (req, res) => {
        res.render("addPost", {
            pageTitle: "Add User - User App",
            value: req.body.value,
            TransactionType: ["add", "withdrow"]
        })
    }

    static addPostMethodLogic = (req, res) => {
        const customer = req.body
        dbCon((err, db) => {
            if (err) res.send(err)
            db.collection("data").insertOne(customer)
                .then(() => res.redirect("/"))
                .catch((e) => res.send(e))
        })

    }
    static single = (req, res) => {
        dbCon((err, db) => {
            try {
                if (err) res.send(err)
                db.collection("data").findOne({ _id: new ObjectId(req.params.id) },
                    (error, customer) => {
                        if (error) res.send(error)

                        res.render("single",
                            {
                                pageTitle: customer ? `customer ${customer.name} data` : "customer not found",
                                customer
                            })
                    }
                )
            } catch (e) {
                res.render('err404',
                    { pagetTitle: "invalid id", errMsg: "invalid id format" }
                )
            }

        })
    }

    static addTransaction = (req, res) => {
        dbCon((err, db) => {
            try{
            db.collection("data").findOne({ _id: new ObjectId(req.params.id) },
            (error, customer) => {
                if (error) res.send(error)        
                res.render("addTransaction",
                {
                    pageTitle: customer ? `customer ${customer.name} data` : "customer not found",
                    customer,  TransactionType: ["add", "withdrow"]
                })
        }
         ) }
         catch (e) {
            res.render('err404',
                { pagetTitle: "invalid id", errMsg: "invalid id format" }
            )
        }
        
        })}


    
    static addTransactionLogic = (req, res) => {
        const customer = req.body
 
        dbCon((err, db)=>{
            if(err) res.render("err404", {pageTitle:"database error", errMsg:"database error"})
            db.collection("data").updateOne(
                {_id:new ObjectId(req.params.id)},
                {$set: req.body}
                )
                .then(()=>res.redirect("/"))
                .catch((e)=>{res.render("err404", {pageTitle:"err in update", errMsg:e.message})})
                
            })        
        }
//         ?????????????????
//             if (err) res.send(err)
//             db.collection("data").findOne({ _id: new ObjectId(req.params.id) },
//                 (error, customer) => {
//                     if (error) res.send(error.message)
//                     res.redirect("/",
//                         {
            
                           
//                         })
  
//                 }
//             )
    
// })}

}
module.exports = User