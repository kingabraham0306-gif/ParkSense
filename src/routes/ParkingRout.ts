import { Router } from "express";
import { upsertParkingStatus, getParkingStatus } from "../controllers/ParkingController";

const parkingRoutes = Router();

parkingRoutes.post("/", upsertParkingStatus);
parkingRoutes.get("/:name", getParkingStatus);

export default parkingRoutes;