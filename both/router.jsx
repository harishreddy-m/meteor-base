FlowRouter.route( '/', {
  name: 'home',
  action(params) {
     ReactLayout.render( MainLayout, { content: <Home/>} )
  }
});

FlowRouter.route( '/todos', {
  name: 'todos',
  action(params) {
     ReactLayout.render( MainLayout, { content: <Todos/>} )
  }
});

FlowRouter.route( '/settings', {
  name: 'settings',
  action(params) {
     ReactLayout.render( MainLayout, { content: <Settings/>} )
  }
});

FlowRouter.route( '/help', {
  name: 'help',
  action(params) {
     ReactLayout.render( MainLayout, { content: <Help/>} )
  }
});
