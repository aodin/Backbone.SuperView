Backbone.SuperView
==================

[Backbone.js](http://backbonejs.org/) is a JavaScript library that provides view, models, collections, and other lightweight objects for building applications.

When building modular Backbone.js components, you may wish to add behavior to the component's initialization behavior. Common operations that take place during initialization include binding to events, modifying arguments given to the constructor, and various methods of data pre-compilation.


One common method of Backbone.js extension, the Mixin model, provides no way to add custom initialization behavior:

```javascript
var MyMixin = {
  foo: 'bar',
  sayFoo: function(){alert(this.foo);}
}

var MyView = Backbone.View.extend({
 // ...
});

_.extend(MyView.prototype, MyMixin);

myView = new MyView();
myView.sayFoo(); // => "bar"
```

See [this answer on StackOverflow](http://stackoverflow.com/a/7853854) for more information.

Instead, users of a component library must wire their own events and call any custom initialization provided by the Mixin.

Another option is to overwrite the `initialize` function called by each object's constructor. A component that overwrites `initialize`, however, prevents any extended objects from using it:

```javascript
var Base = Backbone.View.extend({
    initialize: function() {
        console.log('I am the init of Base');
    }
});

var Extended = Base.extend({
    initialize: function() {
        console.log('I am the init of Extended');
    }
});

var extended = new Extended(); // => 'I am the init of Extended'
```

Providing an alternative `initialize` function in your base component is the simple solution to this behavior.

```javascript
var NewInit = Backbone.View.extend({
    initialize: function(options) {
        console.log('I am the original init');
        this.init.apply(this, arguments);
    } 
});

var Extended = NewInit.extend({
    init: function(options) {
        console.log('I am the new init');
    }
});

var extend = new Extended();
// => I am the original init
// => I am the new init
```

This project shows another solution. With a small amount of boilerplate, a component can have custom initialization behavior without overwriting the `initialize` function and while still inheriting the constructor function from its parent object.

See the file `backbone.superview.js` for the isolated boilerplate. There is also `backbone.component.js`, which shows a more complex component with inherited `events` and `className` attributes.

> aodin, 2013
