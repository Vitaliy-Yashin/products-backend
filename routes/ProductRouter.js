import { Router } from "express";
import ProductController from "../controller/ProductController.js";
const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAll)
ProductRouter.get('/:id', ProductController.getOneByID)
ProductRouter.post('/add', ProductController.create)
ProductRouter.put('/:id', ProductController.update)
ProductRouter.delete('/:id', ProductController.delete)

ProductRouter.get('/health', (req, res)=>{
  res.status(200).json({
    message: 'It\'s ok!'
  })
})

export {ProductRouter}