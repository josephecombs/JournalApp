window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function($el) {
    this.$el = $el;
    
    this.$container = $("<div>").addClass("container");
    
    this.$sidebar = $("<div>").addClass("sidebar");
    this.$content = $("<div>").addClass("content");

    this.$container.append(this.$sidebar).append(this.$content);
    this.$el.append(this.$container);
    
    App.Routers.appRouter = 
        new App.Routers.AppRouter(this.$sidebar, this.$content);
    
    App.Routers.appRouter.postsIndex();
    
    Backbone.history.start();
  },
  
  errors: function (messages) {
    messages.forEach(function (message) {
      App.$el.prepend($('<p>').addClass("error").html(message));
    });
  }
};

$(document).ready(function(){
  App.initialize($("body"));
});
