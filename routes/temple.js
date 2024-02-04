const routes = require('express').Router();
const temples = require('../controllers/temple.js');

// Get all temples
routes.get('/', temples.findAll);

// Get one temple with an id
routes.get('/:temple_id', temples.findOne);

// Create new temple
routes.post('/', temples.create);

// Update a temple with an id
routes.put ('/:id', temples.update);

// Delete a Temple with an id
routes.delete('/:id', temples.delete);

module.exports = routes;