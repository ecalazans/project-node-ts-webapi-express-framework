import { Request, Response } from "express"
import { getClubsService } from "../services/clubs-service"

export const getClubs = async (request: Request, response: Response) => {
  const httpResponse = await getClubsService()

  return response.status(httpResponse.statusCode).json(httpResponse.body)
}