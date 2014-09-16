App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "":               "postsIndex",
    "posts/new":      "postsNew",
    "posts/:id":      "postsShow",
    "posts/:id/edit": "postsEdit"
  },
  
  initialize: function ($sidebar, $content) {
    this.$sidebar = $sidebar;
    this.$content = $content;
  },
  
  postsIndex: function () {
    App.Collections.posts.fetch();
    
    var indexView = new App.Views.PostsIndex({
      collection: App.Collections.posts
    });
    
    this._swapViewSidebar(indexView);
  },
  
  postsShow: function (id) {
    var router = this;
    
    var model = App.Collections.posts.getOrFetch(id, function (model) {
      var showView = new App.Views.PostsShow({
        model: model
      });
    
      router._swapViewContent(showView);
    });
  },
  
  postsEdit: function (id) {
    var router = this;
    
    App.Collections.posts.getOrFetch(id, function (model) {
      var editView = new App.Views.PostsForm({
        model: model
      });
      
      router._swapViewContent(editView);
    });
  },
  
  postsNew: function () {
    var post = new App.Models.Post();

    var newView = new App.Views.PostsForm({
      model: post,
      collection: App.Collections.posts
    });
    
    this._swapViewContent(newView);
  },
  
  _swapViewSidebar: function (newView) {
    this._swapView(this.$sidebar, newView);
  },
  
  _swapViewContent: function (newView) {
    this._swapView(this.$content, newView);
  },
  
  _swapView: function ($el, newView) {
    App.$el.find(".error").remove();
    
    $el.html(newView.render().$el);
  }
});