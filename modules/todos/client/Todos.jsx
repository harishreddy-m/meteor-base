const { Paper } = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs


Todos.client.cmp.Todos = React.createClass({
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },

  render() {
    let style = this.context.appIsMobile ? styles.mainMobile : styles.main
    return(
    <div className="container" style={styles.container}>
      <div style={style}>
        <Todos.client.cmp.TodosContent />
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
  }
}
