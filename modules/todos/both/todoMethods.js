Meteor.methods({
  todoDeleteTodo(id){
    check(id, String)
    console.log("Deleting todo ", id)
    Todos.both.collections.Todos.remove(id)
  },

  todoUpdateTodo(todo){
    check(todo,{
      _id: String,
      title: String,
      user: String,
      createdAt: Match.Any,
      content: String
    })
    console.log("Updating todo ", todo._id)
    Todos.both.collections.Todos.
      update({_id:todo._id},{ $set:{content:todo.content}})
  }
})
