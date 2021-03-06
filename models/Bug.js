const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BugSchema = new Schema({
    name: {
        type: String,
        required: "Bug Name",
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
        type: String
    },
    location:{
        type: String
    },
    price: {
        type: Number
    },
    priceFlick: {
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



const Bug = mongoose.model("Bug", BugSchema);

module.exports = Bug;