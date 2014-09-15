App.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  
  render: function () {
    debugger
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    
    // remove when we have a router
    $('body').append(this.$el);
    
    return this;
  },
});