const { Paper } = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs


Todos.client.cmp.TodosContent = React.createClass({
  render() {
    return(
      <div>
        <Paper zDepth={1} style={styles.container}>
            <h1>TODOS</h1>
        </Paper>
        <Paper zDepth={1} style={styles.container}>
            <h1>TODOS</h1>
        </Paper>
        <Paper zDepth={1} style={styles.container}>
            <h1>TODOS</h1>
        </Paper>
      </div>
    )
  }
})

const styles = {
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    height: '450px',
    marginBottom: '10px'
  }
}
