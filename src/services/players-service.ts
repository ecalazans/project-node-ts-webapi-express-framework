import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, insertPlayer } from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"

//Regras de negócio

export const getPlayerService = async () => {
  const data = await findAllPlayers()
  let response = null

  if (data) {
    response = await HttpResponse.ok(data)
  } else {
    response = await HttpResponse.noContent()
  }

  return response
}

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id)
  let response = null

  if (data) {
    response = await HttpResponse.ok(data)
  } else {
    response = await HttpResponse.noContent()
  }

  return response
}

export const createPlayerService = async (player: PlayerModel) => {
  let response = null

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player)
    response = await HttpResponse.created()
  } else {
    response = await HttpResponse.badRequest()
  }

  return response
}

export const deletePlayerService = async (id: number) => {
  let response = null
  const isDeleted = await deleteOnePlayer(id)

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deleted" })
  } else {
    response = await HttpResponse.badRequest()
  }

  return response
}

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  let response = null

  const data = await findAndModifyPlayer(id, statistics)

  if (Object.keys(data).length === 0) {
    response = await HttpResponse.badRequest()
  } else {
    response = await HttpResponse.ok(data)
  }

  return response
}