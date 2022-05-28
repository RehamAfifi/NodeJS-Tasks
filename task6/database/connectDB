const MongoClient = require("mongodb").MongoClient
const myConnect = (cb)=>{
    MongoClient.connect(process.env.mongoURL, {}, (error, client)=>{
        if(error) return cb(error, false)
        const db = client.db(process.env.dbName)
        cb(false, db)
    })
}
module.exports = myConnect
