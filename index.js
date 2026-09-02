import e from "express";
import mongoose from "mongoose";
import cors from "cors"
import { config } from "./config.js";
import { ProductRouter } from "./routes/ProductRouter.js";
import { HealthRouter } from "./routes/HealthRoute.js";
const app = e()
app.use(cors())
app.use(e.json())
app.use('/products', ProductRouter)
app.use('/', HealthRouter)

async function start() {
  await mongoose.connect(config.db.url)
  app.listen(config.port, () => {
    console.log(`Server started on ${config.port} port`)
  })
}

try {
  await start()
}
catch (e) {
  console.log('MongoDb conntect failed')
  console.log(e)
}
