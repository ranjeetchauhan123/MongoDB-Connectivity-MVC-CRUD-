const {MongoClient} = require('mongodb')

const database = 'collage'
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function connectDB(){
    try{
        await client.connect()
    const db = client.db(database)
    const collection= db.collection('students')
    console.log('database connect Successfully !!');
    return collection;
    }catch(err){
        console.log('faild to connect mongoDB !!');
        console.log(err);              
    }   
    
}

module.exports= connectDB;