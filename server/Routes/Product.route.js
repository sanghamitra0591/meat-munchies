const express= require("express");
const { ProductModel } = require("../models/Product.Model");

const productRouter= express.Router();

productRouter.get("/", async(req, res)=>{
    const {sort, pack, category, subcat, input}= req.query;
    try {
        if(category){
            if(subcat){
                if(sort && pack){
                    if(sort==="asc" && pack==="large"){
                        const data= await ProductModel.find({category, subcat,   "weight" : {$gt: 500} }).sort({ price: 1 });
                        res.send(data);
                    }else if(sort==="asc" && pack==="regular"){
                        const data= await ProductModel.find({category, subcat,  "weight" : {$lte: 500} }).sort({ price: 1 });
                        res.send(data);
                    }else if(sort==="desc" && pack==="large"){
                        const data= await ProductModel.find({category, subcat,  "weight" : {$gt: 500} }).sort({ price: -1 });
                        res.send(data);
                    }else if(sort==="desc" && pack==="regular"){
                        const data= await ProductModel.find({category, subcat,  "weight" : {$lte: 500} }).sort({ price: -1 });
                        res.send(data);
                    }
                }else if(sort){
                    if(sort==="asc"){
                        const data= await ProductModel.find({category, subcat }).sort({ price: 1 });
                        res.send(data);
                    }else if(sort==="desc"){
                        const data= await ProductModel.find({category, subcat }).sort({ price: -1 });
                        res.send(data);
                    }
                }else if(pack){
                    if(pack==="large"){
                        const data= await ProductModel.find({category, subcat,  "weight" : {$gt: 500} });
                        res.send(data);
                    }else if(pack==="regular"){
                        const data= await ProductModel.find({category, subcat, "weight" : {$lte: 500} });
                        res.send(data);
                    }
                }else{
                    const data= await ProductModel.find({category, subcat});
                    res.send(data);
                }
            }else{
                if(sort && pack){
                    if(sort==="asc" && pack==="large"){
                        const data= await ProductModel.find({category,  "weight" : {$gt: 500} }).sort({ price: 1 });
                        res.send(data);
                    }else if(sort==="asc" && pack==="regular"){
                        const data= await ProductModel.find({category,  "weight" : {$lte: 500} }).sort({ price: 1 });
                        res.send(data);
                    }else if(sort==="desc" && pack==="large"){
                        const data= await ProductModel.find({category,  "weight" : {$gt: 500} }).sort({ price: -1 });
                        res.send(data);
                    }else if(sort==="desc" && pack==="regular"){
                        const data= await ProductModel.find({category,  "weight" : {$lte: 500} }).sort({ price: -1 });
                        res.send(data);
                    }
                }else if(sort){
                    if(sort==="asc"){
                        const data= await ProductModel.find({category }).sort({ price: 1 });
                        res.send(data);
                    }else if(sort==="desc"){
                        const data= await ProductModel.find({category }).sort({ price: -1 });
                        res.send(data);
                    }
                }else if(pack){
                    if(pack==="large"){
                        const data= await ProductModel.find({category,  "weight" : {$gt: 500} });
                        res.send(data);
                    }else if(pack==="regular"){
                        const data= await ProductModel.find({category, "weight" : {$lte: 500} });
                        res.send(data);
                    }
                }else{
                    const data= await ProductModel.find({category});
                    res.send(data);
                }
            }
        }
        else if(input){
            if(input.length>2){
                const data= await ProductModel.find({"name" : {"$regex": input, "$options": "i"} });
                res.send(data);
            }else{
                res.send({"msg": "Please enter more than 3 letters"})
            }
        }
        else{
            if(sort && pack){
                if(sort==="asc" && pack==="large"){
                    const data= await ProductModel.find({"weight" : {$gt: 500} }).sort({ price: 1 });
                    res.send(data);
                }else if(sort==="asc" && pack==="regular"){
                    const data= await ProductModel.find({"weight" : {$lte: 500} }).sort({ price: 1 });
                    res.send(data);
                }else if(sort==="desc" && pack==="large"){
                    const data= await ProductModel.find({"weight" : {$gt: 500} }).sort({ price: -1 });
                    res.send(data);
                }else if(sort==="desc" && pack==="regular"){
                    const data= await ProductModel.find({"weight" : {$lte: 500} }).sort({ price: -1 });
                    res.send(data);
                }
            }else if(sort){
                if(sort==="asc"){
                    const data= await ProductModel.find().sort({ price: 1 });
                    res.send(data);
                }else if(sort==="desc"){
                    const data= await ProductModel.find().sort({ price: -1 });
                    res.send(data);
                }
            }else if(pack){
                if(pack==="large"){
                    const data= await ProductModel.find({ "weight" : {$gt: 500} });
                    res.send(data);
                }else if(pack==="regular"){
                    const data= await ProductModel.find({ "weight" : {$lte: 500}  });
                    res.send(data);
                }
            }else{
                const data= await ProductModel.find();
                res.send(data);
            }
        }
        // const data= await ProductModel.find(query);
        // res.send(data);
    } catch (error) {
        res.send({"Error": error})
        console.log(error);
    }
})

productRouter.get("/:id", async(req, res)=>{
    const id= req.params.id;
    try {
        const data= await ProductModel.find({"_id":id});
        res.send(data);
    } catch (error) {
        res.send({"Error": error})
    }
})

productRouter.post("/add", async(req, res)=>{
    const data= req.body;
    try {
        const newdata= new ProductModel(data);
        await newdata.save();
        res.send({"msg" : "Added new post"});
    } catch (error) {
        res.send({"Error": error})
        console.log(error);
    }
})

productRouter.patch("/update/:id", async(req, res)=>{
    try {
        const payload= req.body;
        const id= req.params.id;
        const product= await ProductModel.find({"_id":id});
        if(product.length>0){
            await ProductModel.findByIdAndUpdate({"_id":id}, payload);
            res.send({"msg": "Updated the product"});
        }else{
            res.send({"msg": "No product Found"});
        }
    } catch (error) {
        console.log(error);
        res.send({"msg": "Unable to update data"});
    }
})

productRouter.delete("/delete/:id", async(req, res)=>{
    try {
        const id= req.params.id;
        const product= await ProductModel.find({"_id":id});
        if(product.length>0){
            await ProductModel.findByIdAndDelete({"_id":id});
            res.send({"msg": "Deleted the product"});
        }else{
            res.send({"msg": "No product Found"});
        }
    } catch (error) {
        console.log(error);
        res.send({"msg": "Unable to update data"});
    }
})




module.exports= {
    productRouter
}