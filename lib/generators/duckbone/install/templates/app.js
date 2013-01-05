//= require_self
//= require_tree ./models
//= require_tree ./views

// Setup top-level namespaces
window.<%= application_name %> = {
  Models: {},
  Collections: {},
  Views: {}
};

// Setup the application
<%= application_name %>.Application = Duckbone.Application.extend({

  initialize: function(options){
		// Create the routes
    this.mapRoutes({

    });
  }
});

// Bootstrap Application on Document Ready
// Creates the application, assigns the container, and starts the history
$(document).ready(function(){
  <%= application_name %>.app = new <%= application_name %>.Application();
  <%= application_name %>.app.setContainer($('section#main_content').get(0));
  <%= application_name %>.app.configureFlash({ container: $('div#flashes').get(0)});

  <%= application_name %>.app.bindNavigationBars();
  // If you want to use hash URLs, just disable pushState
  Backbone.history.start({pushState: true});
  $(document).delegate('a[data-navigate]', 'click', function(e){
    <%= application_name %>.app.navigate($(e.currentTarget).attr('data-navigate'), true);
  });
});

