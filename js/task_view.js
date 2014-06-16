var TaskView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('<span><%= name %></span>'),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
})
