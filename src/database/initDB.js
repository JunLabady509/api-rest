const sequelize = require("./db");  // Suppression des accolades
const { User, Order } = require("../models/index");

async function syncDatabase() {
  try {
    await sequelize.sync(); 
    await User.sync({ alter: true }); 
    await Order.sync(); 
    console.log("Modèles synchronisés avec la base de données avec succès.");
  } catch (error) {
    console.error("Erreur lors de la synchronisation de la base de données :", error);
  }
}

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connexion à la base de données réussie !");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
}

testDatabaseConnection();
syncDatabase();

module.exports = { syncDatabase, testDatabaseConnection };
