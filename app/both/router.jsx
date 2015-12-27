FlowRouter.route( '/', {
  name: 'home',
  action(params) {
     ReactLayout.render( App.client.cmp.MainLayout,
       { content: <Home.client.cmp.Home/>} )
  }
});

// Routes for Todos are in
//    /modules/todos/both/router.jsx

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
