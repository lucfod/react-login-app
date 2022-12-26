import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const UserRouter = Router();

UserRouter.get("/get/:id", UserController.get);
export { UserRouter };
