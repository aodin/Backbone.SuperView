describe('Component', function() {
  // Initialize an instance of Component
  var component = new Component();
  
  it('can be created directly', function() {
    expect(component).toBeDefined();
  });

  it('fires its initialization function', function() {
    expect(component.count).toEqual(0);
  });

  it('has its own class', function() {
    expect(component.$el.hasClass('component-class')).toBe(true);
  });

  it('has its own events', function() {
    component.$el.trigger('click');
    expect(component.count).toEqual(1);
  });
});

describe('Extended Components', function() {
  // Create an extended component and initialize an instance
  var ChildView = Component.extend({
    className: 'child-class',
    events: {
      'keydown': 'decrement',
    },
    decrement: function() {
      this.count -= 1;
    },
    initialize: function() {
      this.count = 99;
    }
  });
  var child = new ChildView();

  it('can be created through extend', function() {
    expect(child).toBeDefined();
  });

  it('have their own initialize', function() {
    expect(child.count).toEqual(99);
  });

  it('inherit the component class', function() {
    expect(child.$el.hasClass('component-class')).toBe(true);
  });

  it('have their own class', function() {
    expect(child.$el.hasClass('child-class')).toBe(true);
  });

  it('inherit the component events', function() {
    child.$el.trigger('click');
    expect(child.count).toEqual(100);
  });

  it('have their own events', function() {
    child.$el.trigger(jQuery.Event('keydown', {keyCode: 64}));
    expect(child.count).toEqual(99);
  });

  it('can overwrite the parent events', function() {
    var OverwriteEventView = Component.extend({
      events: {
        'click': 'decrement',
      },
      decrement: function() {
        this.count -= 1;
      }
    });
    var overwrite = new OverwriteEventView();
    expect(overwrite.count).toEqual(0);
    overwrite.$el.trigger(jQuery.Event('click'));
    expect(overwrite.count).toEqual(-1);
  });

});
