App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow",
    "posts/:id/edit": "postsEdit"
  },
  
  initialize: function ($el) {
    this.$el = $el;
  },
  
  postsIndex: function () {
    App.Collections.posts.fetch();
    
    var indexView = new App.Views.PostsIndex({
      collection: App.Collections.posts
    });
    
    this._swapView(indexView);
  },
  
  postsShow: function (id) {
    var router = this;
    
    var model = App.Collections.posts.getOrFetch(id, function (model) {
      var showView = new App.Views.PostsShow({
        model: model
      });
    
      router._swapView(showView);
    });
  },
  
  postsEdit: function (id) {
    var router = this;
    
    App.Collections.posts.getOrFetch(id, function (model) {
      var editView = new App.Views.PostsForm({
        model: model
      });
      
      router._swapView(editView);
    });
  },
  
  _swapView: function (newView) {
    this.$el.html(newView.render().$el);
  }
});