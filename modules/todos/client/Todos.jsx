const { RefreshIndicator} = MUI

Todos.client.cmp.Todos = React.createClass({
  mixins: [ReactMeteorData],
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },
  getInitialState() {
    return {
      menuItems:[
        {name:'Todos', null, icon:null},
        {name:"MenuDivider"},
        {name:'Add New Todo', callback:this.createTodo, icon:'mdi mdi-plus'},
        {name:'+5 Random', callback:this.addFive, icon:'mdi mdi-numeric-5-box-multiple-outline'}
      ]
    }
  },
  getMeteorData() {
    let data = {}
    data.todos = []
    const handle = Meteor.subscribe("todos")
    return {
      dataLoading: ! handle.ready(),
      todos: Todos.both.collections.Todos.find().fetch()
    }
  },

  render() {
    const dataLoading = this.data.dataLoading
    let style = this.context.appIsMobile ? styles.mainMobile : styles.main
    return(
      <div className="container" style={styles.container}>
        <div style={style}>
          {dataLoading
            ? <RefreshIndicator size={40} left={600} top={300} status="loading" />
            :this.data.todos.map((todo)=>{
              return (
                <Todos.client.cmp.TodoCard todo={todo} key={todo._id}/>
                )
            })
          }
        </div>
        <Shared.client.cmp.SideMenu menuItems={this.state.menuItems} />
      </div>
    )
  },

  createTodo(){
    console.log("createTodo")
    FlowRouter.go('/todos/create')
  },
  addFive(){
    console.log("add Five")
    Meteor.call('Todos.addFive')
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
    display: 'flex; display: -webkit-flex',
    flexWrap: 'wrap',
    WebkitFlexWrap: 'wrap'
  },
  mainMobile: {
    boxSizing: 'border-box',
    marginLeft: '20px',
    marginTop: '40px',
    position: 'absolute',
    zIndex: '-10'
  }
}
