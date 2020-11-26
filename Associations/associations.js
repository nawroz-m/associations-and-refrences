var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blog_demo', {useUnifiedTopology: true,
        useNewUrlParser: true,   useCreateIndex: true, useNewUrlParser: true});


// Post
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
var Post = mongoose.model("Post", postSchema);

// User
var userSchema = new mongoose.Schema({
   email: String,
   name: String,
   posts: [postSchema]
   
});
var User = mongoose.model("User", userSchema); 



// var newUser = new User({
//   name: "Helldo",
//   email: "hidddddd@gdmail.com"
// });

// newUser.posts.push({
//   title: "Good luck welcome",
//   content: "you are the right here."
// });

// newUser.save(function(err, user){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(user);
//   }
// });


// var newPost = new Post({
//     title: "Welcome Crazy monky",
//     content: "Here is the contents !"
// });

// newPost.save(function(err, post){
//   if(err){
//       console.log(err);
//   } else{
//       console.log(post);
//   }
// });


User.findOne({name: "Helldo"}, function(err, user){
   if(err){
       console.log(err);
   } else{
       user.posts.push({
           title: "I really hate you!",
           content: "Love in love is not aload!"
       });
       user.save(function(err, user){
          if(err){
              console.log(err);
          } else{
              console.log(user);
          }
       });
   }
});