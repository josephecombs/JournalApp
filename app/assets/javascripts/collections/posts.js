App.Collections.Posts = Backbone.Collection.extend({
  url: "api/posts",
  model: App.Models.Post,
});

App.Collections.posts = new App.Collections.Posts;