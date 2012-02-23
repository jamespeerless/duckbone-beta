/**
# Duckbone.NestableView

NestableView provides automated setup and teardown of child views.  You just provide
a `createChildren` method that returns an object containing all of your child view
instances by name, like this

```javascript
createChildren: function() {
  return {
    myStuff: new StuffView({model: user.stuff})
  }
}
```

NestableView works hand-in-hand with TemplateableView's {{child}} helper.

*/

(function() {

  Duckbone.NestableView = {

    // #### property isNestableView
    // Indicates a view with this mixin included
    isNestableView: true,

    setupNestedViews: function() {
      this.children = this.createChildren();
    },

    createChildren: function() {
      return {};
    },

    removeNestedViews: function() {
      _.each(this.children, function(child) {
        child.remove();
      });
      this.children = {};
    }
  }

})();
