import { findAllClubs } from "../repositories/clubs-repository"
import * as HttpResponse from "../utils/http-helper"

export const getClubsService = async () => {
  const data = await findAllClubs()

  let response = null

  if (data) {
    response = HttpResponse.ok(data)
  } else {
    response = HttpResponse.noContent()
  }

  return response
}