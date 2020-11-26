var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blog_demo_refrences', {useUnifiedTopology: true,
        useNewUrlParser: true,   useCreateIndex: true, useNewUrlParser: true});


var Post = require("./models/post");
var User = require("./models/user");


// // Post
// var postSchema = new mongoose.Schema({
//   title: String,
//   content: String
// });
// var Post = mongoose.model("Post", postSchema);



// // User
// var userSchema = new mongoose.Schema({
//   email: String,
//   name: String,
//   posts: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Post"
//             }
//       ]
   
// });
// var User = mongoose.model("User", userSchema); 



// Post.create({
//     title: "How to cook the best burger par 3 sldj dd ",
//     content: "blah blah blah @@@@d    dddddddd"
// }, function(err, post){
//     if(err){
//          console.log(err);
//     }else{
//         // console.log(post);
//         User.findOne({name: "nnnaaammme"}, function(err, foundUser){
//           if(err){
//               console.lgo(err);
//           } else{
//               foundUser.posts.push(post);
//               foundUser.save(function(err, data){
//                   if(err){
//                       console.log(err);
//                   }else{
//                       console.log(data);
//                   }
//               });
//           }
//         });
//     }
// });




// User.create({
//     email: "aaa@ggg.ccc",
//     name: "nnnaaammme"
// });



User.findOne({email: "aaa@ggg.ccc"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});