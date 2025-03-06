const express = require("express");
const router = express.Router();
const userController = require("../controllers/order");
const auth = require("../auth/auth");

// Route pour récupérer toutes les commandes
router.get("/",auth, userController.getAllOrders);

// Route pour récupérer une commande par son id
router.get("/:id", auth, userController.getOrderById);

// Route pour créer une commande
router.post("/", auth, userController.createOrder);

// Route pour mettre à jour une commande
router.put("/:id",auth, userController.updateOrder);

// Route pour supprimer une commande
router.delete("/:id",auth, userController.deleteOrder);

module.exports = router;