
Todos.client.cmp.Todos = React.createClass({
  mixins: [ReactMeteorData],
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },
  getMeteorData() {
    let data = {}
    data.todos = []
    let handle = Meteor.subscribe("todos")
    if(handle.ready()){
      data.todos = Todos.both.collections.Todos.find().fetch()
    }
    return data
  },

  render() {
    let style = this.context.appIsMobile ? styles.mainMobile : styles.main
    return(
    <div className="container" style={styles.container}>
      <div style={style}>
        <Todos.client.cmp.TodosContent todos={this.data.todos}/>
      </div>
      <Todos.client.cmp.TodosMenu />
    </div>
    )
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
  }
}
