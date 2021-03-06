const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SeaCreatureSchema = new Schema({
    name: {
        type: String,
        required: "Fish Name",
    },
    api_id: {
        type: Number
    },
    northernMonthAvail: {
        type: Array
    },
    southernMonthAvail: {
        type: Array
    },
    timeAvail: {
        type: Array
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    icon: {
        type: String
    },
    catchPhrase: {
        type: String
    },
    museumPhrase: {
        type: String
    }
})



const SeaCreature = mongoose.model("SeaCreature", SeaCreatureSchema);

module.exports = SeaCreature;