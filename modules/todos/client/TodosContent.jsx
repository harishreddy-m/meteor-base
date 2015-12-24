const { Paper } = MUI

Todos.client.cmp.TodosContent = React.createClass({
  propTypes:{
    todos: React.PropTypes.array
  },
  render() {
    return(
      <div style={styles.container}>
        {this.props.todos.map((todo)=>{
          return (
            <Todos.client.cmp.TodoCard todo={todo} key={todo._id}/>
          )
        })}
      </div>
    )
  }
})

const styles = {
  container:{
    display: 'flex; display: -webkit-flex',
    flexWrap: 'wrap',
    WebkitFlexWrap: 'wrap'
  }
}
