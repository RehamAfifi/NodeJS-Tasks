const mongoose = require('mongoose')
const validator = require('validator')
//name, email, password, gender, age,
const User = mongoose.model('User', {
    name: {
    type:String,
    trim:true,
    required:true,
    minlength:3,
    maxlength:20
},
account_Number:{
    type :Number,
    required:true,
    min:1,
    max:200000
    },
    Balance:{
    type :Number,
    required:true,
    min:500,
    max:5000000  
    }
,   TransactionType:{
    type:String,
    trim:true,
    required:true,
    lowercase:true,
    enum:['add', 'withdrow']
   
},
tvalue:{
    type :Number,
    required:true,
    min:500,
    max:5000000  
    }

})

module.exports = User