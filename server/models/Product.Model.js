const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    name: String,
    image: String,
    price: Number,
    orgprice: Number,
    discount: Number,
    desc: String,
    pieces: Number,
    weight: Number,
    net: String,
    delivery: String,
    category: String,
    subcat: String
})

const ProductModel= mongoose.model("product", productSchema);

module.exports= {
    ProductModel
}
