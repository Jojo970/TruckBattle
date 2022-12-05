const mongoose = require('mongoose');

const TruckSchema = new mongoose.Schema(
    {
        truckName: {
            type:String,
            required: [
                true,
                'Truck must be named'
            ]
        },
        truckSkill: {
            type: String,
            required: [
                true,
                'Truck must have a skill'
            ]
        },
        truckPower: {
            type: Number,
            default: 0
        },
        truckRarity: {
            type: Number,
            default: 0
        }
    }
);

const Truck = mongoose.model('Truck', TruckSchema);

module.exports = Truck;