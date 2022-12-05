const TruckControllers = require("../controllers/mongoose.controllers");

module.exports = app => {
    app.get('/api/truck',TruckControllers.findAllTrucks);
    app.get('/api/truck/:id',TruckControllers.findOneTruck);
    app.post('/api/truck',TruckControllers.createTruck);
    app.put('/api/truck/:id',TruckControllers.updateTruck);
    app.delete('/api/truck/:id',TruckControllers.deleteTruck);
};