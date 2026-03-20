const { MongoClient } = require('mongodb')

const database = 'collage'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

let collection;

async function connectDB() {
    try {
        if(!collection){
            await client.connect()
        const db = client.db(database)
        collection = db.collection('students')
        console.log('MongoDB Connect Successfully !!');
        }
        return collection
        
    } catch (err) {
        console.log('faild to connect');
        console.log(err);
    }

}

module.exports= connectDB;
