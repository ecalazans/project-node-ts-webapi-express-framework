import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"

const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 85,
      "Shooting": 94,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 37,
      "Physical": 65
    }
  },
  {
    "id": 15,
    "name": "Alisson Becker",
    "club": "Liverpool",
    "nationality": "Brazil",
    "position": "Goalkeeper",
    "statistics": {
      "Overall": 89,
      "Pace": 85,
      "Shooting": 85,
      "Passing": 86,
      "Dribbling": 79,
      "Defending": 92,
      "Physical": 80
    }
  },
  {
    "id": 19,
    "name": "David Beckham",
    "club": "Retired",
    "nationality": "England",
    "position": "Midfielder",
    "statistics": {
      "Overall": 85,
      "Pace": 76,
      "Shooting": 82,
      "Passing": 90,
      "Dribbling": 84,
      "Defending": 70,
      "Physical": 72
    }
  }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex(player => player.id === id)

  //quando não encontra.. o index é -1
  if (index !== -1) {
    database.splice(index, 1)
    return true
  }

  return false
}

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  const playerIndex = database.findIndex(player => player.id === id)

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics
  }

  return database[playerIndex]
}