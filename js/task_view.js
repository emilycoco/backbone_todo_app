var TaskView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<span><%= name %></span><input type="button" class="delete" value="X"></input>'),

  initialize: function() {
    this.model.on('destroy', this.render, this);
    this.render();
  },

  events: {
    'click .delete' : 'deleteTask'
  },

  deleteTask: function() {
    this.model.destroy();
    this.$el.remove();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
