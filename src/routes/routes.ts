import { Router } from "express";
import {
  deletePlayer,
  getPlayer,
  getPlayerById,
  postPlayer,
  updatePlayers
} from "../controllers/players-controller";
import { getClubs } from "../controllers/clubs-controller";

const router = Router()

router.get("/players", getPlayer)
router.get("/players/:id", getPlayerById)

router.post("/players", postPlayer)
router.delete("/players/:id", deletePlayer)
router.patch("/players/:id", updatePlayers)

router.get("/clubs", getClubs)

export default router