const { Paper, TextField, RefreshIndicator} = MUI
const TodoEditForm = React.createClass({
  propTypes:{
    todo: React.PropTypes.object
  },
  saveTodo(doc){
    // Add _id to the docfield ( empty for create)
    doc._id = this.props.todo ? this.props.todo._id : '',
    Meteor.call('Todos.updateTodo', doc)
    FlowRouter.go('todos')
  },

  render(){
    let todo = this.props.todo || {}
    return(
      <Paper zDepth={2} style={styles.paper}>
        <Form schema={Todos.both.collections.TodosSchema} id="todoForm" onSubmit={this.saveTodo}>
                <TextInput name="title" defaultValue={todo.title} layoutStyle="first-half" />
                <TextInput name="user" defaultValue={todo.user} layoutStyle="first-half" />
                <TextArea name="content" defaultValue={todo.content} rows={5} />
                <SubmitButton label="Save" layoutStyle="first-half"/>
            </Form>
      </Paper>
    )
  }
})

/////////////////////////////////////


Todos.client.cmp.Todo = React.createClass({
  mixins: [ReactMeteorData],
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },
  getInitialState() {
    return {
      menuItems:[
        {name:'All Todos', callback:this.goTodos, icon:'mdi mdi-chevron-left'},
        {name:"MenuDivider"},
        {name:'Delete Todo', callback:this.deleteTodo, icon:'mdi mdi-delete'}
      ]
    }
  },
  getMeteorData() {
    let data = {}
    const handle = Meteor.subscribe("todos")
    return {
      dataLoading: ! handle.ready(),
      todo: Todos.both.collections.Todos.findOne(this.props.id)
    }
  },
  render() {
    const style = this.context.appIsMobile ? styles.mainMobile : styles.main
    const dataLoading = this.data.dataLoading
    return(
      <div className="container" style={styles.container}>
        <div style={style}>
        {dataLoading
          ? <RefreshIndicator size={40} left={200} top={200} status="loading" />
        : <TodoEditForm  todo={this.data.todo}/>}
        </div>
        <Shared.client.cmp.SideMenu menuItems={this.state.menuItems} />
      </div>
    )
  },

  // sideMenuItems callbacks
  goTodos(){
    FlowRouter.go('todos')
  },
  deleteTodo(){
    Meteor.call('Todos.deleteTodo', this.data.todo._id)
    FlowRouter.go('todos')
  },
})


const styles = {
  container:{
    paddingTop: '64px',
    position: 'relative'
    },
  main: {
    boxSizing: 'border-box',
    marginLeft: '202px',
  },
  mainMobile: {
    boxSizing: 'border-box',
    marginLeft: '10px',
    marginTop: '20px',
    position: 'absolute',
    zIndex: '-10'
  },
  paper:{
    margin: '20px',
    padding: '20px',
    flexDirection:'row',
    marginBottom: '10px'
  }
}
