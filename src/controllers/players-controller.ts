import { Request, Response } from "express"
import {
  createPlayerService,
  deletePlayerService,
  getPlayerByIdService,
  getPlayerService,
  updatePlayerService
} from "../services/players-service"
import { StatisticsModel } from "../models/statistics-model"

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

export const deletePlayer = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id)
  const httpResponse = await deletePlayerService(id)

  response.status(httpResponse.statusCode).json(httpResponse.body)
}

export const updatePlayers = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id)
  const body: StatisticsModel = request.body

  const httpResponse = await updatePlayerService(id, body)

  response.status(httpResponse.statusCode).json(httpResponse.body)
}