
const connectDB = require("../model/handleModel");
const { ObjectId } = require('mongodb')

// get data from mongoDB
async function renderEjs(req, res) {
    try {
        const data = await connectDB()
        const result = await data.find().toArray()
        res.render('studentList', { student: result })
    } catch (err) {
        console.log('user get request faild !!');
        console.log(err);
    }

}
// post data from UI to mongoDB
async function postData(req, res) {
    try {
        const data = await connectDB()
        await data.insertOne(req.body)
        console.log('user details post Successfully !!')
        res.redirect('/')
    } catch (err) {
        console.log('user Post request faild !!');
        console.log(err);
    }

}

//delete data from MongoDB
async function handleDelete(req, res) {
    try {
        const id = req.params.id;
        const collection = await connectDB()
        await collection.deleteOne({ _id: new ObjectId(id) })
        console.log('user delete successfully !');
        res.redirect('/')

    } catch (err) {
        console.log('user delete request faild !!');
        console.log(err);
    }

}

//.... delete request by postman............

async function deleteRequest(req, res) {
    try {
        const id = req.params.id
        const collection = await connectDB()
        await collection.deleteOne({ _id: new ObjectId(id) })
        res.send('success')
    }
    catch (err) {
        res.send('Faild !!')
        console.log('faild to delete', err);

    }
}

async function handleUpdate(req,res){
    try{
        const id = req.params.id
        const collection = await connectDB()
        const result = await collection.findOne({_id : new ObjectId(id)})        
        res.render('update',{result : result})       
        
    }catch(err){
        res.send('Faild !!')
        console.log('faild to update', err);
    }
}

async function postUpdateData(req,res){   
    const collection = await connectDB()
    const filter = {_id : new ObjectId(req.params.id)}
    const update = {$set: req.body}
    const result = await collection.updateOne(filter , update)
    console.log(req.body);
    
  
    res.redirect('/')
}

module.exports = { renderEjs, postData, handleDelete, deleteRequest, handleUpdate ,postUpdateData}