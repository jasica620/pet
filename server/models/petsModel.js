const mongoose = require('mongoose');
var PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required."], minlength: [3, "Name must be at least 3 characters."]},
    type: {type: String, required: [true, "Type is required."], minlength: [3, "Type must be at least 3 characters."]},
    desc: {type: String, required: [true, "Description is required."], minlength: [3, "Description must be at least 3 characters."]},
    skill1 :{type: String, default: ""},
    skill2 :{type: String, default: ""},
    skill3 :{type: String, default: ""},
    likes: {type: Number, default: 0}
}, {timestamps: true})

mongoose.model('Pet', PetSchema)