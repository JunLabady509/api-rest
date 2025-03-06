/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gestion des commandes
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Récupère toutes les commandes
 *     description: Renvoie la liste de toutes les commandes enregistrées.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Succès - Retourne la liste des commandes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 101
 *                   product:
 *                     type: string
 *                     example: "Livre"
 *                   quantity:
 *                     type: integer
 *                     example: 2
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Récupère une commande par ID
 *     description: Renvoie les détails d'une commande spécifique.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande à récupérer.
 *     responses:
 *       200:
 *         description: Succès - Retourne les informations de la commande.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 101
 *                 product:
 *                   type: string
 *                   example: "Livre"
 *                 quantity:
 *                   type: integer
 *                   example: 2
 *       404:
 *         description: Commande non trouvée.
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crée une nouvelle commande
 *     description: Enregistre une nouvelle commande dans la base de données.
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 example: "Livre"
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Commande créée avec succès.
 *       400:
 *         description: Données invalides.
 */

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Met à jour une commande
 *     description: Met à jour les informations d'une commande existante.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande à mettre à jour.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 example: "Ordinateur"
 *               quantity:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Commande mise à jour avec succès.
 *       400:
 *         description: Données invalides.
 *       404:
 *         description: Commande non trouvée.
 */

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Supprime une commande
 *     description: Supprime une commande en fonction de son ID.
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la commande à supprimer.
 *     responses:
 *       200:
 *         description: Commande supprimée avec succès.
 *       404:
 *         description: Commande non trouvée.
 */