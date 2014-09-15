window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function($el) {
    App.Routers.appRouter = new App.Routers.AppRouter($el);
    Backbone.history.start();
  }
};

$(document).ready(function(){
  App.initialize($("body"));
});
