import ProductModel from "../models/ProductModel.js"
class ProductServices {
  async getAll() {
    const response = await ProductModel.find()
    return response
  }    
  async getOneByID(product_id) {
    const response = await ProductModel.findById(product_id)
    return response
  }
  async create(newProduct) {
    const response = await ProductModel.create(newProduct)
    return response
  }
  async update(product) {
    const response = await ProductModel.findByIdAndUpdate(product.id, product.data)
    return response
  }

  async delete(product_id) {
    const response = await ProductModel.findByIdAndDelete(product_id)
    return response
  }
}
export default new ProductServices()  