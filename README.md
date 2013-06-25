Backbone.SuperView
==================

[Backbone.js](http://backbonejs.org/) is a JavaScript library that provides view, models, collections, and other lightweight objects for building applications.

When building modular Backbone.js components, a object may need to add behavior to the object's `initialization` function. Common operations that take place in `initialization()` include binding to events, modifying arguments given to the constructor, and various methods of data pre-compilation.

One common method of Backbone.js extension uses the Mixin model:

```javascript
var MyMixin = {
  foo: "bar",
  sayFoo: function(){alert(this.foo);}
}

var MyView = Backbone.View.extend({
 // ...
});

_.extend(MyView.prototype, MyMixin);

myView = new MyView();
myView.sayFoo(); //=> "bar"
```

See [this answer on StackOverflow](http://stackoverflow.com/a/7853854) for more information.

Unfortunately, the Mixin provides no way to execute functions by default. Instead, users of a component library must wire their own events and call any custom initialization provided by the Mixin.

This project shows an example of how custom initialization behavior can be added to Backbone.js objects (in this case, a `View`) without re-writing the constructor function.

See the file `backbone.superview.js` for the underlying code and a running example in `example.html`.

aodin, 2013
