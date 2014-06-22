var ListView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    _.each(this.collection.models, function(task) {
      var taskView = new TaskView({model: task});
      this.$el.append(taskView.render());
    }, this);
    return this.el;
  }
})
