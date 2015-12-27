Todos.client = {}
Todos.client.cmp = {}  // React Components

Meteor.startup(()=>{
  FormHandler.ignoreFields = ["_id", "createdAt", "updatedAt", "content"];
})
