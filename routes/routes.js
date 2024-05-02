const express = require('express');
const router = express();

const testController = require('../controllers/test.controller');

module.exports = () => {
    router.get('/Test-prueba', testController.getTest);
    router.get('/test/:id', testController.getTestById);
    router.post('/test', testController.createTest);
    router.put('/test/:id', testController.updateTestById);
    router.delete('/test/:id', testController.deleteTestById);

    return router;
}