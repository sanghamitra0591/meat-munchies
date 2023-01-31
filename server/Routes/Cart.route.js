const express = require("express");
const Cart = require("../models/Cart.Model");
const authenticate = require("../middlewares/authenticate.middleware");

const cartRouter = express.Router();

cartRouter.get("", authenticate, async (req, res) => {
  try {
    const cart = await Cart.find({ user_id: req.body.user_id }).lean().exec();
    return res.status(200).send(cart);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cartRouter.post("", authenticate, async (req, res) => {
  const user_id = req.body.user_id;
  try {
    const cart = await Cart.create({
      name: req.body.product_name,
      image: req.body.image,
      price: req.body.price,
      quantity: req.body.quantity,
      user_id: user_id,
    });
    return res.status(201).send(cart);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

cartRouter.patch("/:id", authenticate, async (req, res) => {
  const payload = req.body;
  try {
    const item = await Cart.findByIdAndUpdate(req.params.id, payload, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(item);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

cartRouter.delete("/:id", authenticate, async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send("Data succesfully deleted!");
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = { cartRouter };
