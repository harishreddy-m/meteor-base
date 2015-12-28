const { Card, CardHeader, CardTitle, CardText, CardActions,
  Avatar, FontIcon, RaisedButton, Dialog,
  TextField} = MUI

Todos.client.cmp.TodosCards = React.createClass({
  propTypes:{
    todos: React.PropTypes.array
  },
  render(){
    return(
      <div style={styles.main}>
        {this.props.todos.map((todo)=>{
          return (
            <TodoCard todo={todo} key={todo._id}/>
            )
        })}
      </div>
    )
  }
})

const TodoCard = React.createClass({
  propTypes:{
    todo: React.PropTypes.object
  },
  getInitialState() {
    return {
      showDeleteDialog: false,
    }
  },

  deleteTodo(event){
    // Called on both client and server to delete todo
    Meteor.call('Todos.deleteTodo', this.props.todo._id)
  },

  render() {
    let deleteActions = [
      { text: 'Cancel' },
      { text: 'Delete', onTouchTap: this.deleteTodo, ref:'delete' }
    ];

    return(
      <div>
        <Card style={styles.card}>
          <CardHeader
            title={this.props.todo.user}
            subtitle={this.props.todo.title}
            avatar={<Avatar icon={<FontIcon className="mdi mdi-note"/>}/>}/>
          <CardText>
            {!this.state.docDirty ?
              <p onTouchTap={this.setDocDirty}>{this.props.todo.content}</p>
              :
              <TextField ref="todoContent"
                defaultValue={this.props.todo.content}
                multiLine={true} rows={2} rowsMax={8} fullWidth={true}
                onChange={this.setDocDirty}/>
            }
          </CardText>
          <CardActions style={styles.cardActions}>
            <RaisedButton label="Edit" linkButton={true} href={"/todos/"+this.props.todo._id} />
            <RaisedButton label="Delete" onTouchTap={this.openDeleteDialog} primary={true}/>
          </CardActions>
        </Card>

        <Dialog
          ref="dialogDelete"
          title="Delete Todo"
          actions={deleteActions}
          actionFocus="delete"
          open={this.state.showDeleteDialog}
          onRequestClose={this.closeDeleteDialog}>
          <p><b>Author:</b>{this.props.todo.user}</p>
          <p><b>Title:</b>{this.props.todo.title}</p>
          <p>Really delete todo?</p>
        </Dialog>
      </div>
    )
  },
  openDeleteDialog(){
    this.setState({showDeleteDialog: true});
  },
  closeDeleteDialog(){
    this.setState({showDeleteDialog: false});
  }
})

const styles = {
  main: {
    display: 'flex; display: -webkit-flex',
    flexFlow: 'row wrap',
    WebkitFlexFlow: 'row wrap',
    justifyContent: 'flex-start',
    WebkitJustifyContent: 'flex-start',
  },
  card:{
    flex: '1 1 auto',
    WebkitFlex: '1 1 auto',
    height: '300px',
    maxWidth: '500px',
    margin: '10px'
  },
  cardActions:{
    display:'flex; display: -webkit-flex',
    justifyContent:'space-between',
  }
}
