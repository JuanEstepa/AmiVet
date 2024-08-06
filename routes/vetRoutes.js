const routes = require("express").Router();

const {
  start,
  getPet,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("../controllers/petController");

const {
  getOwner,
  getOwnerById,
  createOwner,
  updateOwner,
  deleteOwner,
} = require("../controllers/ownerController");

const {
  getService,
  getServiceById,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const {
  getPetService,
  getPetServiceByPet,
  createPetService,
  updatePetService,
  deletePetService,
} = require("../controllers/petServiceController");

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     responses:
 *       200:
 *         description: Welcome to the API.
 */
routes.get("/", start);

routes.get("/petService/:id", getPetServiceByPet);

/**
 * @swagger
 * components:
 *   schemas:
 *     Pet:
 *       type: object
 *       required:
 *         - name
 *         - age
 *         - species
 *         - weight
 *         - status
 *         - owner
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the pet
 *         age:
 *           type: string
 *           format: date
 *           description: The birth date of the pet
 *         species:
 *           type: string
 *           description: The species of the pet
 *         weight:
 *           type: number
 *           description: The weight of the pet
 *         status:
 *           type: boolean
 *           description: The status of the pet
 *         owner:
 *           type: string
 *           description: The ID of the owner
 *     Owner:
 *       type: object
 *       required:
 *         - name
 *         - last_name
 *         - email
 *         - phone
 *       properties:
 *         name:
 *           type: string
 *           description: The first name of the owner
 *         last_name:
 *           type: string
 *           description: The last name of the owner
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the owner
 *         phone:
 *           type: string
 *           description: The phone number of the owner
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - price
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the service
 *         price:
 *           type: number
 *           description: The price of the service
 *         details:
 *           type: string
 *           description: Additional details about the service
 *     PetService:
 *       type: object
 *       required:
 *         - petId
 *         - serviceId
 *         - date
 *       properties:
 *         petId:
 *           type: string
 *           description: The ID of the pet
 *         serviceId:
 *           type: string
 *           description: The ID of the service
 *         date:
 *           type: string
 *           format: date
 *           description: The date when the service was provided
 */

/**
 * @swagger
 * /pet:
 *   get:
 *     summary: Retrieve a list of pets
 *     responses:
 *       200:
 *         description: A list of pets.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pet'
 */
routes.get("/pet", getPet);

/**
 * @swagger
 * /pet/{id}:
 *   get:
 *     summary: Retrieve a pet by ID
 *     description: Get the details of a pet by providing its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the pet to retrieve.
 *     responses:
 *       200:
 *         description: Pet details successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 *       404:
 *         description: Pet not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Pet not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An unexpected error occurred
 */
routes.get("/pet/:id", getPetById);

/**
 * @swagger
 * /pet:
 *   post:
 *     summary: Create a new pet
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       201:
 *         description: Pet created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 */
routes.post("/pet", createPet);

/**
 * @swagger
 * /pet/{id}:
 *   put:
 *     summary: Update a pet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pet'
 *     responses:
 *       200:
 *         description: Pet updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pet'
 */
routes.put("/pet/:id", updatePet);

/**
 * @swagger
 * /pet/{id}:
 *   delete:
 *     summary: Delete a pet by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pet deleted successfully.
 */
routes.delete("/pet/:id", deletePet);

/**
 * @swagger
 * /owner:
 *   get:
 *     summary: Retrieve a list of owners
 *     responses:
 *       200:
 *         description: A list of owners.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Owner'
 */
routes.get("/owner", getOwner);

/**
 * @swagger
 * /owner/{id}:
 *   get:
 *     summary: Retrieve an owner by ID
 *     description: Get the details of an owner by providing its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the owner to retrieve.
 *     responses:
 *       200:
 *         description: Owner details successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Owner'
 *       404:
 *         description: Owner not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Owner not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An unexpected error occurred
 */
routes.get("/owner/:id", getOwnerById);

/**
 * @swagger
 * /owner:
 *   post:
 *     summary: Create a new owner
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Owner'
 *     responses:
 *       201:
 *         description: Owner created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Owner'
 */
routes.post("/owner", createOwner);

/**
 * @swagger
 * /owner/{id}:
 *   put:
 *     summary: Update an owner by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Owner'
 *     responses:
 *       200:
 *         description: Owner updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Owner'
 */
routes.put("/owner/:id", updateOwner);

/**
 * @swagger
 * /owner/{id}:
 *   delete:
 *     summary: Delete an owner by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *        200:
 *          description: Owner deleted successfully.
 */
routes.delete("/owner/:id", deleteOwner);

/**
 * @swagger
 * /service:
 *   get:
 *     summary: Retrieve a list of services
 *     responses:
 *       200:
 *         description: A list of services.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 */
routes.get("/service", getService);

/**
 * @swagger
 * /service/{id}:
 *   get:
 *     summary: Retrieve a service by ID
 *     description: Get the details of a service by providing its unique identifier.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the service to retrieve.
 *     responses:
 *       200:
 *         description: Service details successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       404:
 *         description: Service not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Service not found
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: An unexpected error occurred
 */
routes.get("/service/:id", getServiceById);

/**
 * @swagger
 * /service:
 *   post:
 *     summary: Create a new service
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       201:
 *         description: Service created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 */
routes.post("/service", createService);

/**
 * @swagger
 * /service/{id}:
 *   put:
 *     summary: Update a service by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: Service updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 */
routes.put("/service/:id", updateService);

/**
 * @swagger
 * /service/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Service deleted successfully.
 */
routes.delete("/service/:id", deleteService);

/**
 * @swagger
 * /petservice:
 *   get:
 *     summary: Retrieve a list of pet services
 *     responses:
 *       200:
 *         description: A list of pet services.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PetService'
 */
routes.get("/petservice", getPetService);

/**
 * @swagger
 * /petservice:
 *   post:
 *     summary: Create a new pet service
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PetService'
 *     responses:
 *       201:
 *         description: Pet service created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PetService'
 */
routes.post("/petservice", createPetService);

/**
 * @swagger
 * /petservice/{id}:
 *   put:
 *     summary: Update a pet service by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PetService'
 *     responses:
 *       200:
 *         description: Pet service updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PetService'
 */
routes.put("/petservice/:id", updatePetService);

/**
 * @swagger
 * /petservice/{id}:
 *   delete:
 *     summary: Delete a pet service by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pet service deleted successfully.
 */
routes.delete("/petservice/:id", deletePetService);

module.exports = routes;
