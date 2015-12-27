const { Paper, TextField, RaisedButton, RefreshIndicator} = MUI


const TodoEditItem = React.createClass({
  propTypes:{
    todo: React.PropTypes.object,
    callback: React.PropTypes.func
  },
  getInitialState() {
    return {
      form: this.props.todo || {}
    }
  },
  handleChange: function(field, e){
    var nextState = this.state.form
    nextState[field] = e.target.value
    this.setState({form:nextState})
  },
  saveTodo(){
    console.log("saveTodo")
    Meteor.call('Todos.updateTodo', this.state.form)
    FlowRouter.go('todos')
  },

  render(){
    let todo = this.props.todo
    return(
      <Paper zDepth={2} style={styles.paper}>
        <form>
          <TextField ref="user" autoFocus={true}
            floatingLabelText="Name"
            value={todo.user}
            onChange={this.handleChange.bind(this,'user')}
            fullWidth={true}/>
          <TextField
            floatingLabelText="Title"
            value={todo.title}
            onChange={this.handleChange.bind(this,'title')}
            fullWidth={true}/>
          <TextField
            floatingLabelText="Content"
            value={todo.content}
            onChange={this.handleChange.bind(this,'content')}
            multiLine={true} rows={5} rowsMax={8} fullWidth={true}/>
          <RaisedButton label="Save" primary={true} onTouchTap={this.saveTodo}/>
        </form>
      </Paper>
    )
  }
})

/////////////////////////////////////


Todos.client.cmp.Todo = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      disableSave: true,
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
          ? <RefreshIndicator size={40} left={80} top={5} status="loading" />
          : <TodoEditItem  todo={this.data.todo}/>}
        </div>
        <Shared.client.cmp.SideMenu menuItems={this.state.menuItems} />
      </div>
    )
  },

  // sideMenuItems callbacks
  goTodos(){
    console.log("goTodos")
    FlowRouter.go('todos')
  },
  deleteTodo(){
    console.log("Delete todo ", this.data.todo._id)
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
    marginLeft: '20px',
    marginTop: '40px',
    position: 'absolute',
    zIndex: '-10'
  },
  paper:{
    margin: '20px',
    padding: '50px',
    flexDirection:'row',
    marginBottom: '10px'
  }
}
