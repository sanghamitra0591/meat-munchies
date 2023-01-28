const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    desc: String,
    pieces: Number,
    weight: Number,
    delivery: Number,
    category: String,
    subcat: String
})

const ProductModel= mongoose.Model("product", productSchema);

module.exports= {
    ProductModel
}