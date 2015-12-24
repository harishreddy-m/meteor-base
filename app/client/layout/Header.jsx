let menuItems = [
  {  label: 'Todos', path: 'todos' },
  {  label: 'Settings', path: 'settings' },
  {  label: 'Help', path: 'help' }
];

const { AppBar, Tabs, Tab, IconMenu, IconButton} = MUI
const {   MenuItem, MenuDivider, SvgIcons } = MUI.Libs

App.client.cmp.Header = React.createClass({
  propTypes:{
    mobile: React.PropTypes.bool
  },
  getInitialState() {
    return {
      tabsValue: FlowRouter.getRouteName()
    }
  },

  menuChange(event, value){
    // Tab/Menu changed.  Set tab-visibility and go to route
    //   Tabs emit (value, event)  => We need 'event'
    //   Home Button on left emits nothing
    //   Menu emit (event, value)  => We need 'value.key'
    value = typeof event === 'string' ?  event : value
    value = typeof value === 'undefined' ? 'home' : value
    value = value.key ? value.key : value
    this.setState({tabsValue:value})
    FlowRouter.go(value)
  },

  render() {
    return (
      <AppBar title='TodoApp' style={styles.appBar}
        zDepth={3}
        iconElementLeft={
          <IconButton onTouchTap={this.menuChange}>
            <SvgIcons.ActionHome />
          </IconButton>} >
        {!this.props.mobile ?
        <Tabs style={styles.tabs} value={this.state.tabsValue} onChange={this.menuChange}>
          { menuItems.map((tab)=>{
            return <Tab label={tab.label} value={tab.path} key={tab.path} style={styles.tab} />
          })}
        </Tabs>
        :null}
        {this.props.mobile ?
            <IconMenu
              style={styles.menuIcon}
              iconButtonElement={
                <IconButton >
                  <SvgIcons.NavigationMoreVert color={App.client.myTheme.palette.alternateTextColor}/>
                </IconButton>
              }
              openDirection="bottom-left"
              onItemTouchTap = {this.menuChange}>
               <MenuItem index='home' value='home' key='home' leftIcon={<SvgIcons.ActionHome />}>Home</MenuItem>
                <MenuDivider />
              { menuItems.map((tab)=>{
                return <MenuItem index={tab.label} value={tab.path} key={tab.path}>{tab.label}</MenuItem>
              })}
            </IconMenu>
            :null}
      </AppBar>
    );
  }
})


const styles = {
  appBar:{
    position:'fixed',
    top: '0px',
    left: '0px'
  },
  tabs: {
    width: 350
  },
  tab: {
    height: 60,
    textTransform: 'uppercase'
  }
}
