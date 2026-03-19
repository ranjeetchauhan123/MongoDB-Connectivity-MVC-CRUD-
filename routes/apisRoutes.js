const result =require('../model/dataModel')

async function apiRoute(req,res){
    const apis = await result()
    res.send(apis)
    
}
module.exports=apiRoute;