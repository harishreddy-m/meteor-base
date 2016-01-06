// Build a custom collabsible menu-item from an array of menu items:
// [ {name:'Menu Item Name', callback:function, disable:function, icon:'mdi mdi-chevron-left'}, ]
//      disable should return true or false
const { Paper, FloatingActionButton, FontIcon, List, ListItem, Divider } = MUI

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
        {this.state.menuBar
          ? <MenuBar menuItems={this.props.menuItems} closeMenu={this.toggleMenu} />
          : <FloatingActionButton style={styles.menuMobile} onClick={this.toggleMenu}>
              <FontIcon className="mdi mdi-menu" />
            </FloatingActionButton>
          }
      </div>
    )}
  }
})

const MenuBar = React.createClass({
  propTypes:{
    menuItems: React.PropTypes.array
  },
  onMenuClick(item ,event){
    //This handles menu-item clicks, and fires callbacks
    event.preventDefault()
    // If compact mobile view -> close the menubar
    if (this.props.closeMenu) this.props.closeMenu()
    if( typeof item.callback === 'function'){
      item.callback()
    }
  },
  render() {
    return(
      <List
        autoWidth={false}
        openDirection="bottom-right"
        style={styles.menu}
        width={180}
        zDepth={2}>
          {this.props.menuItems.map((menu, i)=>{
            if(menu.name === "MenuDivider"){
              return(
                <Divider key={i} />
              )
            } else{
              let disabled = menu.disabled ? menu.disabled() : false
              return(
                <ListItem key={i} onTouchTap={this.onMenuClick.bind(this, menu)} primaryText={menu.name} disabled={disabled} leftIcon={<FontIcon className={menu.icon} />}/>
              )
            }
          })}
      </List>
    )
  }
})


const styles = {
  menu: {
    position: 'fixed',
    top: '80px',
    width: '182px',
    margin: '5px'
  },
  menuMobile: {
    position: 'fixed',
    top: '70px',
    margin: '5px'
  }
}
