import ProductService from "../services/ProductService.js";
class ProductController {
  async getAll(req, res) {
    const response = await ProductService.getAll()
    res.status(200).json(response)
  }
  async getOneByID(req, res) {
    const response = await ProductService.getOneByID(req.params.id)
    res.status(200).json(response)
  }
  async create(req, res) {
    const response = await ProductService.create({ ...req.body })
    res.status(201).json(response)
  }
  async update(req, res) {
    const response = await ProductService.update(req.params.id, req.body)
    res.status(200).json(response)
  }

  async delete(req, res) {
    const response = await ProductService.delete(req.params.id)
    res.status(200).json(response)
  }
}
export default new ProductController