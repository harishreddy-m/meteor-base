FlowRouter.route( '/todos', {
  name: 'todos',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Todos.client.cmp.Todos  />} )
  }
})

FlowRouter.route( '/todos/:id', {
  name: 'todo',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Todos.client.cmp.Todo id={params.id} />} )
  }
})
