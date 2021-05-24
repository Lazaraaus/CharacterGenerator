"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnimationSchema = new Schema ({
    animGif: {
        type: Schema.Types.String,
        required: true
    },
    animFile: {
        type: Schema.Types.Buffer,
        required: true
    } 
});

AnimationSchema.statics.create = function(obj) {
    // Get model from Mongoose
    const Animation = mongoose.model("Animation", AnimationSchema);
    // Create Object for new model using model Schema
    const animation = new Animation();
    // Assign values to model instance
    animation.animGif = obj.animGif;
    animation.animFile = obj.animFile;

    // Return model instance
    return animation;
}

// Export Model for use
module.exports = mongoose.model("Animation", AnimationSchema);