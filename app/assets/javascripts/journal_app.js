window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function($el) {
    this.$el = $el;
    
    App.Routers.appRouter = new App.Routers.AppRouter($el);
    Backbone.history.start();
  },
  
  errors: function (messages) {
    this.$el.children(".error").remove();
    messages.forEach(function (message) {
      App.$el.prepend($('<p>').addClass("error").html(message));
    });
  }
};

$(document).ready(function(){
  App.initialize($("body"));
});
