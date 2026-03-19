// ------------------------------MongoDB Connectivity---------------------------------

// const express = require('express')
// const app = express()
// const port = 3000
// const {MongoClient} = require('mongodb')

// const databaseName = "collage"
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url)

// async function dbConnection(){
//     await client.connect()
//     const db = client.db(databaseName)
//     const collection = db.collection('students')
//     console.log("mongodb connected Successfully !!!")
//     const result = await collection.find().toArray()
//     console.log(result);    
// }
// dbConnection()

// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// })


// ..........Get deta from MongoDB and Print UI as (Table Formate) & Print APIs new Routes......................

// const express = require('express');
// const handleController = require('./consroller/dataController');
// const apiRoute = require('./routes/apisRoutes');
// const app = express()
// const port = 3000;

// app.set('view engine', 'ejs')

// app.get('/',handleController)

// app.get('/apis',apiRoute)

// app.listen(port,()=>{
//     console.log('server is running');

// })


// ..........................................POST FORM DATA (mongodb).................................................


// const express = require('express')
// const app = express()

// const controller = require('./consroller/postController')
// const port = 3000;

// app.set('view engine','ejs')
// app.use(express.urlencoded({extended: true}))

// app.get('/',controller.renderfile)

// app.post('/submit',controller.saveData)

// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`)    
// })


// ..........................send set from Postman and store MongoDB..............................

// const express = require('express')
// const app = express()
// const { MongoClient } = require('mongodb')
// const port = 3000;

// // connectivity
// const databaseName = 'collage'
// const url = 'mongodb://localhost:27017'
// const client = new MongoClient(url)

// async function connectDB() {
//     try {
//         await client.connect()
//         const db = client.db(databaseName)
//         const collection = db.collection('students')
//         console.log('database connect successully');
//         return collection
//     } catch (err) {
//         console.log('mongoDB not Connect');
//         console.log(err);
//     }
// }
// connectDB()

// //middleware
// app.use(express.json())

// // route
// app.post('/api', async (req, res) => {
//     try {
//         console.log(req.body);
//         const db = client.db(databaseName)
//         const collection = db.collection('students')
//         await collection.insertOne(req.body)
//         res.send({ "massage": req.body })
//     } catch (err) {
//         console.log('No SUch Data', err)
//     }

// })
// app.listen(port, () => {
//     console.log(`server is running on port ${port}`)
// })


// .....................................get, post, delete, delete form mongoDB  (CRUD)............................................................

const express = require('express')
const controller = require('./consroller/handleController')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(express.urlencoded({extended: true}))

app.get('/',controller.renderEjs)

app.post('/adduser',controller.postData)

app.get('/user/:id',controller.handleDelete)

//delete request by postman.........................
app.delete('/delete/:id',controller.deleteRequest)

app.get('/update/:id',controller.handleUpdate)
app.post('/updatedata/:id',controller.postUpdateData)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
