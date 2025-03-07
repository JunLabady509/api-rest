/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *       description: "Entrez votre token avec le préfixe `Bearer `, exemple: `Bearer abcde12345`"
 */

/**
 * @swagger
 * /users/authenticate:
 *   post:
 *     summary: Authentifie un utilisateur
 *     description: Vérifie les identifiants de l'utilisateur et renvoie un token JWT en cas de succès.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "exemple@email.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Succès - Token JWT retourné.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR..."
 *       401:
 *         description: Identifiants incorrects.
 */


/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupère tous les utilisateurs
 *     description: Renvoie la liste des utilisateurs enregistrés (Nécessite un token JWT).
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Succès - Retourne la liste des utilisateurs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: "Alice"
 *                   email:
 *                     type: string
 *                     example: "alice@email.com"
 */


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Récupère un utilisateur par ID
 *     description: Renvoie les détails d'un utilisateur spécifique (Nécessite un token JWT).
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur à récupérer.
 *     responses:
 *       200:
 *         description: Succès - Retourne les informations de l'utilisateur.
 *       404:
 *         description: Utilisateur non trouvé.
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crée un nouvel utilisateur
 *     description: Enregistre un nouvel utilisateur dans la base de données.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Alice"
 *               email:
 *                 type: string
 *                 example: "alice@email.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès.
 *       400:
 *         description: Données invalides.
 */


/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Met à jour un utilisateur
 *     description: Met à jour les informations d'un utilisateur existant (Nécessite un token JWT).
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Alice"
 *               email:
 *                 type: string
 *                 example: "alice@email.com"
 *     responses:
 *       200:
 *         description: Utilisateur mis à jour avec succès.
 *       400:
 *         description: Données invalides.
 *       404:
 *         description: Utilisateur non trouvé.
 */

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Supprime un utilisateur
 *     description: Supprime un utilisateur en fonction de son ID (Nécessite un token JWT).
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur à supprimer.
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès.
 *       404:
 *         description: Utilisateur non trouvé.
 */
