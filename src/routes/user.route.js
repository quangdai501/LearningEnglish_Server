import express from 'express';
import UserController from '../controllers/UserController.js';
const route = express.Router();

route.get("/", UserController.getUsers);

export default route;