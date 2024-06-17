import { PlayerModel } from "../models/player-model"
import { findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helper"

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
    response = HttpResponse.created()
  } else {
    response = HttpResponse.badRequest()
  }

  return response
}