const express = require("express");
const PostController = require("../controllers/PostController");
const router = express.Router();

router.post("/", PostController.create); //crear una publicacion
router.get("/", PostController.getAll); //Traer todos los posts (publicaciones)
router.get("/id/:id", PostController.getById  );  //Traer publicación por id

module.exports = router;
