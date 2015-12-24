Meteor.publish("todos", function () {
    return Todos.both.collections.Todos.find()
  })
