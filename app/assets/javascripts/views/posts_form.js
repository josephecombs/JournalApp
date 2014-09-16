App.Views.PostsForm = Backbone.View.extend({
  template: JST["posts/form"],
  
  events: {
    'click .form-submit': 'clickFormSubmit'
  },
  
  clickFormSubmit: function (event) {
    event.preventDefault();
    
    var json = $('.posts-form').serializeJSON();
    var post = new App.Models.Post(json.post);
    var router = App.Routers.appRouter;
    
    var editSaveOptions = {
      success: router.postsIndex.bind(router),
      error: function (model, response, options) {
        router.postsEdit(post.id);

        App.errors(response.responseJSON);
      }
    };
    
    if (post.isNew) {
      this.collection.create(json, editSaveOptions);
    } else {
      post.save({}, editSaveOptions);
    }
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