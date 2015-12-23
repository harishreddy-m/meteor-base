FlowRouter.route( '/', {
  name: 'home',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Home.client.cmp.Home/>} )
  }
});

FlowRouter.route( '/todos', {
  name: 'todos',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Todos.client.cmp.Todos/>} )
  }
});

FlowRouter.route( '/settings', {
  name: 'settings',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Settings.client.cmp.Settings/>} )
  }
});

FlowRouter.route( '/help', {
  name: 'help',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Help.client.cmp.Help/>} )
  }
});
