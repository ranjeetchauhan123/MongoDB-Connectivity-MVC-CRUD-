const { MongoClient } = require('mongodb')

const database = 'collage'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function connectDB() {
    try {
        await client.connect()
        const db = client.db(database)
        const collection = db.collection('students')
        console.log('MongoFB Connect Successfully !!');
        return collection;
    } catch (err) {
        console.log('faild to connect');
        console.log(err);
    }

}

module.exports= connectDB;
