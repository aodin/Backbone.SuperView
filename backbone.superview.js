(function() {
  var SuperView = function(options) {
    this.preInitialize(options);
    Backbone.View.call(this, options);
    this.postInitialize(options);
  };

  SuperView.extend = Backbone.View.extend;

  _.extend(SuperView.prototype, Backbone.View.prototype, {
    // Pre-initialize is able to modify given options before they are passed
    // to the default View constructor
    preInitialize: function(options) {
      console.log('Pre-initialization function');
    },
    // Post-initialization runs after the default constructor, including the
    // _configure, _ensureElements and delegateEvents functions
    postInitialize: function(options) {
      console.log('Post-initialization function!');
    }
  });

  this.SuperView = SuperView;

}).call(this);