"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema ({
    name: {
        type: Schema.Types.String,
        required: true
    },
    profession: {
        type: Schema.Types.String,
        required: true
    },
    backstory: {
        type: Schema.Types.String,
        required: true
    },
    mixamoModel: {
        type: Schema.Types.String,
        required: false
    },
    animations: [{
       type: Schema.Types.ObjectId,
       ref: "Animation"
    }]
});

CharacterSchema.statics.create = function(obj) {
    // Get model from Mongoose
    const Character = mongoose.model("Character", CharacterSchema);
    // Create Object for new model using model Schema
    const character = new Character();
    // Assign values to model instance
    character.name = obj.name;
    character.profession = obj.profession;
    character.backstory = obj.backstory;
    character.mixamoModel = obj.mixamoModel;
    character.animations = obj.animations;
    
    // Return model instance
    return character;
}
// Export Model for use
module.exports = mongoose.model("Character", CharacterSchema);