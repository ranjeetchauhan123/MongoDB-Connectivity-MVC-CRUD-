const connectDB = require("../model/postModel")

function renderfile(req, res) {
    res.render("userForm")
}

async function saveData(req, res) {
    try {
        const data = req.body
        const collection = await connectDB()
        await collection.insertOne(data)
        res.send('data was successfully Saved !!')
    } catch (err) {
        res.send('data not submit');
        console.log(err);
    }
}
module.exports={ renderfile, saveData }