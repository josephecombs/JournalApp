App.Collections.Posts = Backbone.Collection.extend({
  url: "api/posts",
  model: App.Models.Post,
});