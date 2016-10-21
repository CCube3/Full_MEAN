var mongoose = require("mongoose");
// Build your friend schema and add it to the mongoose.models
var FriendsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    birthday: String
});
var Friend = mongoose.model("Friend", FriendsSchema);
