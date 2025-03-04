const jwt = require("jsonwebtoken");
const privateKey = process.env.JWT_PRIVATE_KEY;

// Vérification du token
module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    const msg =
      "Vous n'avez pas fourni de jeton d'authentification, Ajoutez-en un dans l'en-tête de la requête";
    return res.status(401).json({ msg });
  }

  const token = authorizationHeader.split(" ")[1]; // Récupération du token
  const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {
    if (error) {
      const msg =
        "L'utilisateur n'est pas autorisé à accéder à cette ressource";
      return res.status(401).json({ msg });
    }
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      const msg = "L'identifiant de l'utilisateur est invalide";
      return res.status(401).json({ msg });
    }
    next();
  });
};
