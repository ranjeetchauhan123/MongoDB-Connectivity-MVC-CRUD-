const result = require("../model/dataModel");

async function handleController(req, res) {
    try {
        const database = await result()
        console.log('database Connectivity Successfully !!')
        res.render('homePage', { students: database })
    }
    catch (err) {
        console.log('data fetching Error', err);
    }

}

module.exports = handleController ;