// Build a custom collabsible menu-item from an array of menu items:
// [ {name:'Menu Item Name', callback:function, disable:function, icon:'mdi mdi-chevron-left'}, ]
//      disable should return true or false
const { Paper, FloatingActionButton, FontIcon } = MUI
const { Menu, MenuItem, MenuDivider} = MUI.Libs

Shared.client.cmp.SideMenu = React.createClass({
  //Parent for the menuBar
  //    On Desktop, render the menuBar
  //    On Mobile, render Floating Button which toggles the menuBar
  contextTypes :{
    appIsMobile: React.PropTypes.bool.isRequired
  },
  propTypes:{
    menuItems: React.PropTypes.array
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
        <MenuBar menuItems={this.props.menuItems}/>
      )} else {
        return(
        <div>
          <FloatingActionButton style={styles.menuMobile} onClick={this.toggleMenu}>
            <FontIcon className="mdi mdi-menu" />
          </FloatingActionButton>
          {this.state.menuBar ? <MenuBar menuItems={this.props.menuItems} closeMenu={this.toggleMenu} /> : null}
        </div>
      )}
  }
})

const MenuBar = React.createClass({
  propTypes:{
    menuItems: React.PropTypes.array
  },
  onMenuClick(event, item){
    //This handles menu-item clicks, and fires callbacks
    event.preventDefault()
    // If compact mobile view -> close the menubar
    if (this.props.closeMenu) this.props.closeMenu()
    if( typeof item.props.callback === 'function'){
      item.props.callback()
    }
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
          {this.props.menuItems.map((menu, i)=>{
            if(menu.name === "MenuDivider"){
              return(
                <MenuDivider key={i}/>
              )
            } else{
              let disabled = menu.disabled ? menu.disabled() : false
              return(
                <MenuItem key={i} callback={menu.callback} primaryText={menu.name} disabled={disabled} leftIcon={<FontIcon className={menu.icon} />}/>
              )
            }
          })}
      </Menu>
    )
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
