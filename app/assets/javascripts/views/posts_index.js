App.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  
  initialize: function () {
    this.listenTo(
      this.collection, "remove", this.render
    );
    this.listenTo(
      this.collection, "add", this.render
    );
    this.listenTo(
      this.collection, "change:title", this.render
    );
    this.listenTo(
      this.collection, "reset", this.render
    );
  },
  
  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    
    return this;
  },
  
  events: {
    'click .delete-post': 'clickDeletePost',
  },
  
  clickDeletePost: function (event) {
    event.preventDefault;
    var post_id = $(event.currentTarget).data('id');
    var post = new App.Models.Post({ id: post_id });
    
    post.destroy();
    this.collection.remove(post);
  },
});