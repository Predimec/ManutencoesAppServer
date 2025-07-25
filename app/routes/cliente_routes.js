import { Router } from "express";
import ClienteController from '../controllers/cliente_controller.js'
import { autenticarSessao } from "../middlewares/auth.js";

const router = Router();
router.use(autenticarSessao);

router.use(autenticarSessao);

router.get("/cliente", ClienteController.getAll)
router.get("/cliente/:id", ClienteController.getOne)
router.post("/cliente", ClienteController.create)
router.put("/cliente/:id", ClienteController.update)
router.delete("/cliente/:id", ClienteController.delete)

export default router