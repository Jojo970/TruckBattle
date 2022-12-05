const Truck = require('../models/mongoose.model');

module.exports.findAllTrucks = (req,res) => {

    Truck.find().then((allTrucks) => {
        res.json({ Trucks: allTrucks})
    }).catch((err) => {
        res.status(400).json({ message:"Something went horribly wrong", error: err});
    });

}

module.exports.findOneTruck = (req,res) => {
    Truck.findOne({_id:req.params.id}).then((oneTruck => res.json({ Truck: oneTruck}))).catch( err => {res.status(400).json({ message:"Something went horribly wrong", error: err});}
    );
}

module.exports.createTruck = (req,res) => {
    Truck.create(req.body).then(newTruck => {
        res.json( { Truck: newTruck})
    }).catch((err) => {
        res.status(400).json({ message:"Something went horribly wrong", error: err});
    });
}

module.exports.updateTruck = (req,res) => {
    Truck.findOneAndUpdate({_id:req.params.id}, req.body, { new:true, runValidators:true}).then( updatedTruck => {
        res.json( { Truck: updatedTruck})
    }).catch( err => {
        res.status(400).json({ message:"Something went horribly wrong", error: err});
    });
}

module.exports.deleteTruck = (req,res) => {
    Truck.findOneAndDelete({_id:req.params.id}).then( result => {
        res.json( {result : result} )}).catch( err => {
            res.status(400).json({ message:"Something went horribly wrong", error: err});
        });
};