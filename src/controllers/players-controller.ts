import { Request, Response } from "express"
import { getPlayerService } from "../services/players-service"
import { ok } from "../utils/http-helper"

export const getPlayer = async (request: Request, response: Response) => {
  const dataService = await getPlayerService()

  const dataHttp = await ok(dataService)

  response.status(dataHttp.statusCode).json(dataHttp.body)
}