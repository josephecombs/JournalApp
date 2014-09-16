App.Views.PostsForm = Backbone.View.extend({
  template: JST["posts/form"],
  
  events: {
    'click .form-submit': 'clickFormSubmit'
  },
  
  clickFormSubmit: function (event) {
    event.preventDefault();
    
    var that = this;
    var json = $('.posts-form').serializeJSON();
    var router = App.Routers.appRouter;
    
    // var editSaveOptions = {
    //   success: Backbone.history.navigate.bind({}, "posts", true),
    //   error: function (model, response, options) {
    //     Backbone.history.navigate.bind({}, "posts/" + json.id + "/")
    //
    //     App.errors(response.responseJSON);
    //   }
    // };
    
    if (this.model.isNew()) {
      this.collection.create(json,{
        success: Backbone.history.navigate.bind( Backbone.history, "", true),
        error: function (model, response, options) {
          Backbone.history.navigate("posts/new", true);
          App.errors(response.responseJSON);
        }
      });
    } else {
      this.model.save(json, {
        success: Backbone.history.navigate.bind( Backbone.history, "", true),
        error: function (model, response, options) {
          Backbone.history.navigate("posts/" + json.id + "/edit", true);
          App.errors(response.responseJSON);
        }
      });
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