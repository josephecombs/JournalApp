App.Views.PostsShow = Backbone.View.extend({
  template: JST["posts/show"],

  initialize: function () {
    // this.render();
  },

  render: function () {
    var view = this;
    var renderedContent = this.template({
      post: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});