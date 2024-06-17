import { PlayerModel } from "../models/player-model"

const database: PlayerModel[] = [
  {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Paris Saint-Germain",
    "nationality": "Argentina",
    "position": "Forward",
    "statics": {
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
    "statics": {
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
    "statics": {
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