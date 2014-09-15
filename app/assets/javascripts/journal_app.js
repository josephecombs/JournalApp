window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  
  initialize: function() {
    App.Collections.posts.fetch();
  }
};

$(document).ready(function(){
  App.initialize();
});
