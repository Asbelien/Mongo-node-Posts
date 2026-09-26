import express from "express";
import postController from "../controllers/postController.js";

const router = express.Router();

router.get("/", postController.getAll);
router.get("/new", postController.showCreateForm);
router.post("/new", postController.create);
router.get("/edit/:id", postController.showEditForm);
router.post("/edit/:id", postController.update);
router.post("/delete/:id", postController.delete);

export default router;