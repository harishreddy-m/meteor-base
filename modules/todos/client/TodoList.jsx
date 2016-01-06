const {Paper, List, ListItem, Divider} = MUI


Todos.client.cmp.TodosList = React.createClass({
  propTypes:{
    todo: React.PropTypes.object
  },
  handleTap(id, event){
    console.log("Item " + id + " tapped")
    FlowRouter.go("/todos/" + id)
  },

  render(){
    return(
      <div style={styles.main}>
        <Paper zDepth={2} style={styles.paper}>
          <List>
            {this.props.todos.map(todo => {
              return (
                React.Children.toArray([
                  <Divider />,
                    <ListItem key={todo.title}
                      value={todo._id} primaryText={todo.title}
                      secondaryText={todo.user}
                      onTouchTap={this.handleTap.bind(this, todo._id)}
                      />
                ])
              )
            })}
          </List>
        </Paper>
      </div>
    )
  },
})

const styles = {
  main: {
      flexGrow: '0',

    // flexFlow: 'row wrap',
    // WebkitFlexFlow: 'row wrap',
    // justifyContent: 'flex-start',
    // WebkitJustifyContent: 'flex-start',
  },
  card:{
    flex: '1 1 auto',
    WebkitFlex: '1 1 auto',
    height: '300px',
    maxWidth: '500px',
    margin: '10px'
  },
  paper:{
    padding: '5px',
  }
}
