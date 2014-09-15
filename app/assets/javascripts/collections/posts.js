App.Collections.Posts = Backbone.Collection.extend({
  url: "api/posts",
  model: App.Models.Post,
  
  getOrFetch: function (id, callback) {
    var post = this.get(id);
    var collection = this;

    if (post) {
      callback(post);
    } else { 
      this.fetch({
        success: function () {
          callback(collection.get(id));
        }
      });
    }
  }
});

App.Collections.posts = new App.Collections.Posts;