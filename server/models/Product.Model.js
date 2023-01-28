const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    desc: String
})

const ProductModel= mongoose.Model("product", productSchema);

module.exports= {
    ProductModel
}