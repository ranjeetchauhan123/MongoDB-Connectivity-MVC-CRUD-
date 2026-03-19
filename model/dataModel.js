const { MongoClient } = require("mongodb");

const database = 'collage'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function connectDb() {
    try {
        await client.connect()
        const db = client.db(database)
        const collection = db.collection('students')
        const result = await collection.find().toArray()
        return result
    }
    catch (err) {
        console.log('database Error', err);

    }

}

module.exports = connectDb;