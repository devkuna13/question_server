const mangoDb = require('mongodb')
const queDao = {
    save: async (data) =>{
        try{
            const mangoClient = mangoDb.MongoClient
            const mangoServer = await mangoClient.connect(process.env.DB_URL)
            const db = mangoServer.db("queApp")
            const collection = db.collection("questions")
            const insRes =  await collection.insertOne(data)
            return insRes;
        }
        catch(e){
            return e
        }
    }
}

module.exports = queDao