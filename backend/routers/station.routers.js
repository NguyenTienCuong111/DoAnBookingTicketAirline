const express = require("express");
const {Station} = require("../models");
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation, getAllProvince} = require("../controllers/station.controllers");
const {checkExist} = require("../middlewares/validations/checkExist");
const {authenticate} = require("../middlewares/auth/authenticate");
const {authorize} = require("../middlewares/auth/authorize");
const stationRouter = express.Router();

stationRouter.post("/", createStation);
stationRouter.get("/province", getAllProvince);

stationRouter.get("/", getAllStation);
stationRouter.get("/:id", getDetailStation);
stationRouter.put("/:id", checkExist(Station), updateStation);
stationRouter.delete("/:id",checkExist(Station), deleteStation);
module.exports = {
	stationRouter,
};
