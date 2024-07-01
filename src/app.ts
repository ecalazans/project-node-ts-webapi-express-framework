import express from "express"
import router from "./routes/routes"
import cors from "cors"

function createApp() {
  const app = express()

  app.use(express.json())

  app.use("/api", router)

  app.use(cors())

  const corsOptions = {
    origin: "http://edc.sistem.com",
    methods: ["GET"]
  }

  return app
}

//quando for somente uma coisa que quero exportar = export default
export default createApp