import { Request, Response } from "express"
import { createPlayerService, getPlayerByIdService, getPlayerService } from "../services/players-service"
import { noContent } from "../utils/http-helper"

export const getPlayer = async (request: Request, response: Response) => {
  const httpResponse = await getPlayerService()

  response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id) // tudo do request vem como string
  const httpResponse = await getPlayerByIdService(id)

  response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (request: Request, response: Response) => {
  const bodyValue = request.body

  const httpResponse = await createPlayerService(bodyValue)

  if (httpResponse) {
    response.status(httpResponse.statusCode).json(httpResponse.body)
  }
}