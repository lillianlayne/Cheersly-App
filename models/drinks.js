const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const drinksSchema = new Schema({
    category: {
        type: String,
        enum: ['beer', 'wine', 'cocktails', 'mocktails']
    },
    label: String,
    reviews: String // change to reviews schema later
}, {
    timestamps: true
});

module.exports = mongoose.model('Drink', drinksSchema);