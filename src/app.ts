import express from "express"
import router from "./routes/routes"

function createApp() {
  const app = express()

  app.use(express.json())

  app.use("/api", router)

  return app
}

//quando for somente uma coisa que quero exportar = export default
export default createApp