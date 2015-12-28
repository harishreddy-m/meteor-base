const { RefreshIndicator} = MUI

Todos.client.cmp.Todos = React.createClass({
  mixins: [ReactMeteorData],
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },
  getInitialState() {
    return {
      todoView: 'list',
      menuItems:[
        {name:'Todos', null, icon:null},
        {name:"MenuDivider"},
        {name:'Add New Todo', callback:this.createTodo, icon:'mdi mdi-plus'},
        {name:'+5 Random', callback:this.addFive, icon:'mdi mdi-numeric-5-box-multiple-outline'},
        {name:"MenuDivider"},
        {name:'Card View', callback:this.setViewCard, icon:'mdi mdi-view-grid'},
        {name:'List View', callback:this.setViewList, icon:'mdi mdi-view-list'},
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
    switch(this.state.todoView){
      case 'card':
        todoView = <Todos.client.cmp.TodosCards todos={this.data.todos} />
        break
      case 'list':
        todoView = <Todos.client.cmp.TodosList todos={this.data.todos} />
    }
    return(
      <div className="container" style={styles.container}>
        <div style={style}>
          {dataLoading
            ? <RefreshIndicator size={40} left={600} top={300} status="loading" />
          : todoView}
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
  },
  setViewCard(){
    //Fill the view with cards
    this.setState({todoView:'card'})
  },
  setViewList(){
    //Fill the view with lists
    this.setState({todoView:'list'})
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
    marginTop:'20px',
    marginRight: '20px',
  },
  mainMobile: {
    boxSizing: 'border-box',
    marginLeft: '20px',
    marginTop: '40px',
    marginRight: '20px',
    // position: 'absolute',
    zIndex: '-10'
  }
}
