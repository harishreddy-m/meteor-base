//These methods are called on both client and server

Meteor.methods({
  'Todos.deleteTodo'(id){
    check(id, String)
    console.log("Deleting todo ", id)
    Todos.both.collections.Todos.remove(id)
  },

  'Todos.updateTodo'(todo){
    check(todo, {
      _id: String,
      title: String,
      user: Match.Optional(String),
      createdAt: Match.Optional(Match.Any),
      content: String
    })
    if(todo._id === ''){
      Todos.both.collections.Todos.insert(
        {user:todo.user, title:todo.title, content:todo.content})
    } else{
      Todos.both.collections.Todos.update({_id:todo._id},
        { $set:{user:todo.user || '', title:todo.title, content:todo.content}})
    }
  }
})
