import { Router } from "express";
const HealthRouter = Router()
HealthRouter.get('/health', (req, res)=>{
  res.status(200).json({
    message: 'It\'s ok!'
  })
})
export {HealthRouter}