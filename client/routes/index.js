const express = require('express');
const router = express.Router();

const catchErrors = require('../lib/errorHandlers').catchErrors;

/**
 * Photos Controllers
 */
const photosController = require('../controllers/photosController');

router.post('/photos/upload', catchErrors(photosController.uploadPhotos));

router.get('/photos', catchErrors(photosController.getPhotos));

/**
 * Users
 */
// router.get('/login', userController.loginForm);

module.exports = router;
