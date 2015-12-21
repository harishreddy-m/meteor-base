let menuItems = [
  {  label: 'Todos', path: 'todos' },
  {  label: 'Settings', path: 'settings' },
  {  label: 'Help', path: 'help' },
];

const {
  AppBar,
  Tabs,
  Tab,
  IconMenu,
  IconButton,
 } = MUI
 const {
   MenuItem
 } = MUI.Libs

Header = React.createClass({
  propTypes:{
    mobile: React.PropTypes.bool
  },

  tabChange(tab){
    console.log("Tabchange: ", tab.props.value);
    FlowRouter.go(FlowRouter.path(tab.props.value))
  },

  render() {
    return (
      <AppBar title='Titel' style={styles.appBar}>
        <Tabs style={styles.tabs}>
          { menuItems.map((tab)=>{
            return <Tab label={tab.label} value={tab.path} key={tab.path} style={styles.tab} onActive={this.tabChange} />
          })}
        </Tabs>
      </AppBar>
    );
  }
})


const styles = {
  appBar:{
  },
  tabs: {
    width: 300,
    bottom: 20
  },
  tab: {
    height: 64,
    textTransform: 'uppercase'
  }
}
