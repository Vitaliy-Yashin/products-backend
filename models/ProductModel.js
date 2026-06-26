import {Schema, model} from "mongoose";

const ProductModel = new Schema(
  {
    name: {type: String, unique: true, required: true},
    price: {type: Number, required: true}
  }
)

export default model('Product', ProductModel)