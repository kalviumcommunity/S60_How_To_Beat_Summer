const mongoose = require("mongoose");
const summerDB = require("./summerData");
const dotenv = require("dotenv");

dotenv.config();

async function backEnd() {
    try {
        await mongoose.connect(process.env.Connection);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

const summerSchema =  mongoose.Schema({
    category: String,
    image: String,
    health: String,
    beauty: String,
    dos: String,
    donts: String
});
console.log(summerDB)
const SummerModel = mongoose.model("SummerData", summerSchema);
module.exports = {
    model: SummerModel,
    connectdb: backEnd
};

