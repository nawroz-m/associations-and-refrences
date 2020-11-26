var mongoose = require("mongoose");
// Post
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
module.exports = mongoose.model("Post", postSchema);

// Module exports are the instruction that tells Node. js which 
// bits of code (functions, objects, strings, etc.) to “export” from 
// a given file so other files are allowed to access the exported code.
