const {Order} = require('../models/index.js');

const orderController = {};

// Récupérer toutes les commandes
orderController.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error("Erreur dans orderController.getAllOrders :", error);
    res.status(500).json(error);
  }
}

// Récupérer une commande par son id
orderController.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      const msg = `Aucune commande trouvée avec l'identifiant ${req.params.id}`;
      return res.status(404).json({ msg });
    }
    res.json(order);
  } catch (error) {
    console.error("Erreur dans orderController.getOrderById :", error);
    res.status(500).json(error);
  }
}

// Créer une commande
orderController.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    console.error("Erreur dans orderController.createOrder :", error);
    res.status(500).json(error);
  }
}

// Mettre à jour une commande
orderController.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      const msg = `Aucune commande trouvée avec l'identifiant ${req.params.id}`;
      return res.status(404).json({ msg });
    }
    await order.update(req.body);
    res.json(order);
  } catch (error) {
    console.error("Erreur dans orderController.updateOrder :", error);
    res.status(500).json(error);
  }
}

// Supprimer une commande
orderController.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      const msg = `Aucune commande trouvée avec l'identifiant ${req.params.id}`;
      return res.status(404).json({ msg });
    }
    await order.destroy();
    res.json(order);
  } catch (error) {
    console.error("Erreur dans orderController.deleteOrder :", error);
    res.status(500).json(error);
  }
}

module.exports = orderController;