const {productmodel} = require('../Models/productmodel')


const getproducts = async(req,res,next)=>{
    try{
        const getproductdetails = await productmodel.find({})
        if(getproductdetails){
            res.status(200).json({
                err:false,
                message:"Successfully fetced the data",
                response:getproductdetails
            })
        }
        else{
            res.status(404).json({
                err:true,
                message:"No data found"
            })
        }
    }
    catch(err){
         next(err.message)
    }
}


const addproducts = async(req,res,next)=>{
    try{
        const{
            productname,
               productcost,
               productinfo,
               productimage
        } = req.body
        const addproductdetails = await productmodel.insertMany({
            productname :productname,
            productcost :productcost,
            productinfo :productinfo,
            productimage :productimage
        })
        if(addproductdetails){
            res.send({
                err:false,
                message:"Product added  successfully",
                response:addproductdetails
            })
        }
        else{
            res.status(404).json({
                err:true,
                message:"No data found"
            })
        }
    }
    catch(err){
         next(err.message)
    }
}

module.exports = {
    getproducts,
    addproducts
}