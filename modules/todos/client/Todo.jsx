const { Paper, Card, CardHeader, CardTitle, CardText, CardActions, Avatar,
        FontIcon, TextField, RaisedButton} = MUI

const TodoEditItem = React.createClass({
  propTypes:{
    todo: React.PropTypes.object,
    dataLoading: React.PropTypes.bool
  },
  getInitialState() {
    return {
      todo: this.props.todo || {}
    }
  },
  componentWillReceiveProps(props){
    // Parent is sending new data ( our todo)
    console.log("componentWillReceiveProps", props.todo.user)
    this.setState({todo:props.todo})
  },
  handleChange(key){
      return (event)=>{
      let todo = this.props.todo
      todo[key] = event.target.value
      console.log("handleChange", todo.user)
      this.setState({todo:todo})
      this.props.callback(this.state.todo)
    }
  },

  render(){
    const { dataLoading, todo } = this.state
    if(dataLoading) return (<h1>Loading</h1>)
    return(
      <Paper zDepth={2} style={styles.paper}>
        <TextField
          floatingLabelText="Name"
          value={todo.user}
          onChange={this.handleChange('user')}
          fullWidth={true}/>
        <TextField
          floatingLabelText="Title"
          value={todo.title}
          onChange={this.handleChange('title')}
          fullWidth={true}/>
        <TextField
          floatingLabelText="Content"
          value={todo.content}
          onChange={this.handleChange('content')}
          multiLine={true} rows={5} rowsMax={8} fullWidth={true}/>

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
        {name:'Save Todo', callback:this.saveTodo, disabled:this.getDisabled, icon:'mdi mdi-content-save'},
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
  callback(todo){
    //TODO  triggert CB met oude data
    this.data.todo = todo
    this.setState({disableSave:false})
    console.log("callback", this.data.todo.user)

  },
  render() {
    const style = this.context.appIsMobile ? styles.mainMobile : styles.main

    return(
      <div className="container" style={styles.container}>
        <div style={style}>
          <TodoEditItem todo={this.data.todo} dataLoading={this.data.dataLoading} callback={this.callback}/>
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
  saveTodo(){
    console.log("Save Todo", this.data.todo)
  },
  deleteTodo(){
    console.log("Delete todo ", this.data.todo._id)
  },
  getDisabled() {
    // Return true:false to disable saveButton in SideMenu
    return this.state.disableSave
  }
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
