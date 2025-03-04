const {User} = require('../models/index.js');

const userController = {};

// Récupérer tous les utilisateurs
userController.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Erreur dans userController.getAllUsers :", error);
    res.status(500).json(error);
  }
}

// Récupérer un utilisateur par son id
userController.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      const msg = `Aucun utilisateur trouvé avec l'identifiant ${req.params.id}`;
      return res.status(404).json({ msg });
    }
    res.json(user);
  } catch (error) {
    console.error("Erreur dans userController.getUserById :", error);
    res.status(500).json(error);
  }
}

// Créer un utilisateur
userController.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    console.error("Erreur dans userController.createUser :", error);
    res.status(500).json(error);
  }
}

// Mettre à jour un utilisateur
userController.updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      const msg = `Aucun utilisateur trouvé avec l'identifiant ${req.params.id}`;
      return res.status(404).json({ msg });
    }
    await user.update(req.body);
    res.json(user);
  } catch (error) {
    console.error("Erreur dans userController.updateUser :", error);
    res.status(500).json(error);
  }
}

// Supprimer un utilisateur
userController.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      const msg = `Aucun utilisateur trouvé avec l'identifiant ${req.params.id}`;
      return res.status(404).json({ msg });
    }
    await user.destroy();
    res.json({ msg: `L'utilisateur avec l'identifiant ${req.params.id} a été supprimé` });
  } catch (error) {
    console.error("Erreur dans userController.deleteUser :", error);
    res.status(500).json(error);
  }
}

// Se connecter en tant qu'utilisateur
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const privateKey = process.env.JWT_PRIVATE_KEY;

userController.authenticate = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            const msg = "Adresse e-mail ou mot de passe incorrect";
            return res.status(401).json({ msg });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            const msg = "Adresse e-mail ou mot de passe incorrect";
            return res.status(401).json({ msg });
        }
        const token = jwt.sign({ userId: user.id }, privateKey, { expiresIn: "24h" });
        res.json({ token });
    }
    catch (error) {
        console.error("Erreur dans userController.authenticate :", error);
        res.status(500).json(error);
    }
};

module.exports = userController;