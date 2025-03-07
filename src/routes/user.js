const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../auth/auth");

// Route pour se connecter 
router.post("/authenticate", userController.authenticate);

// Route pour récupérer tous les utilisateurs
router.get("/", auth, userController.getAllUsers);

// Route pour récupérer un utilisateur par son id
router.get("/:id", auth, userController.getUserById);

// Route pour créer un utilisateur
router.post("/", userController.createUser);

// Route pour mettre à jour un utilisateur
router.put("/:id", auth, userController.updateUser);

// Route pour supprimer un utilisateur
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;