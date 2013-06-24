(function() {
  var SuperView = function(models, options) {
    // TODO call with arguments?
    Backbone.View.call(this, options);
    this.superInitialize(options);
  };

  SuperView.extend = Backbone.View.extend;

  _.extend(SuperView.prototype, Backbone.View.prototype, {
    superInitialize: function(options) {
      console.log('I perform more initialization here!');
    }
  });

  window.SuperView = SuperView;

})(window);