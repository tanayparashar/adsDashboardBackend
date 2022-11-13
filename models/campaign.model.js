const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
    name: { type: String, required: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    clicks: { type: Number, required: true },
    budget: { type: Number, required: true },
    location: { type: String, required: true },
    platform: { type: String, required: true },
    active: { type: Boolean, required: true },
    productId: { type: Schema.Types.ObjectId, ref:'Product' }
},
{
    collection: "Campaign",
    timestamps: true
});

const Campaign = mongoose.model("Campaign", campaignSchema);

module.exports = Campaign;