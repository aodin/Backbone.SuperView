// An example Backbone.js View utilizing the SuperView boilerplate
(function() {
  var Component = function(options) {
    this.preInitialize(options);
    Backbone.View.call(this, options);
  };

  Component.extend = Backbone.View.extend;

  _.extend(Component.prototype, Backbone.View.prototype, {
    addClassName: 'component-class',
    addEvents: {
      'click': 'increment',
    },
    increment: function() {
      this.count += 1;
    },
    preInitialize: function(options) {
      // Add the additional class names
      // Additional classNames could also be added directly to the template
      this.className = (this.className ? (_.result(this, 'className') + ' ') : '') + this.addClassName;

      // Add the additional events
      // TODO does not play well with functions that need an initialized var!
      this.events = _.extend({}, this.addEvents, _.result(this, 'events'));

      // Initialize an attribute that will be overwritten
      this.count = 0;
    }
  });

  this.Component = Component;

}).call(this);