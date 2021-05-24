"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {type: Schema.Types.String},
    last_name: {type: Schema.Types.String},
    username: {type: Schema.Types.String, required: true},
    email: {type: Schema.Types.String, required: true},
    password: {type: Schema.Types.String, required: true}
});

UserSchema.statics.create = (data) => {
    /* 
        This is just for mock-up purposes will hash and salt passwords.
        Will also implement JWTs
        This is very insecure at the moment, storing raw user information
        in a MongoDB instance.
    */
    // Get model from Mongoose
    const User = mongoose.model("User", UserSchema);
    // Create object for new model using schema
    const user = new User();
    // Assign values to new instance
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.username = data.username;
    user.email = data.email;
    user.password = data.password;

    // Return Model instance
    return user;
};

// Export Model for use
module.exports = mongoose.model("User", UserSchema);

