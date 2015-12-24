const { Paper, FloatingActionButton, FontIcon } = MUI

const { Menu, MenuItem, MenuDivider} = MUI.Libs

Todos.client.cmp.TodosMenuBar = React.createClass({
  onMenuClick(event, item){
    //This handles all menu-item clicks
    event.preventDefault()
    console.log("onMenuClick:", item);
    // If compact mobile view -> close the menubar
    if (this.props.closeMenu) this.props.closeMenu()
  },
  render() {
    return(
      <Menu
        autoWidth={false}
        openDirection="bottom-right"
        style={styles.menu}
        width={190}
        zDepth={2}
        onItemTouchTap={this.onMenuClick}>

          <MenuItem key={0} primaryText='Todos' />
          <MenuDivider />
          <MenuItem key={1} primaryText='Menu Item 1' leftIcon={<FontIcon className="mdi mdi-plus" />}/>
          <MenuItem key={2} primaryText='Menu Item 2' leftIcon={<FontIcon className="mdi mdi-content-copy" />}/>
          <MenuItem key={3} primaryText='Menu Item 3' leftIcon={<FontIcon className="mdi mdi-sort" />}/>
          <MenuItem key={4} primaryText='Menu Item 4' leftIcon={<FontIcon className="mdi mdi-delete" />}/>
      </Menu>
    )
  }
})

Todos.client.cmp.TodosMenu = React.createClass({
  //Parent for the menuBar
  //    On Desktop, render the menuBar
  //    On Mobile, render Floating Button which toggles the menuBar
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },
  getInitialState() {
    return {menuBar: false};
  },
  toggleMenu(){
    // On mobile, toggle the menubar
    this.setState({menuBar: !this.state.menuBar})
  },
  render() {
    if(!this.context.appIsMobile){
      return(
        <Todos.client.cmp.TodosMenuBar/>
      )} else {
        return(
        <div>
          <FloatingActionButton style={styles.menuMobile} onClick={this.toggleMenu}>
            <FontIcon className="mdi mdi-menu" />
          </FloatingActionButton>
          {this.state.menuBar ? <Todos.client.cmp.TodosMenuBar closeMenu={this.toggleMenu} /> : ''}
        </div>
      )}
  }
})

const styles = {
  menu: {
    position: 'fixed',
    top: '70px',
    width: '192px',
    margin: '5px'
  },
  menuMobile: {
    position: 'fixed',
    top: '70px',
    margin: '5px'
  }
}
