var App = Backbone.Model.extend({
  defaults: {
    test: true,
    list: []
  },

  initialize: function() {
    this.list = new List(tasks);
  }
});
