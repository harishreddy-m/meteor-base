injectTapEventPlugin()

const {
  Styles,
    AppCanvas,
    AppBar,
    LeftNav,
    MenuItem
} = MUI
const { ThemeManager } = Styles

MainLayout = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(myTheme)
    }
  },

  componentWillMount() {
    let setTabsState = function() {
      this.setState({renderTabs: document.body.clientWidth <= 768})
    }.bind(this)
    setTabsState()
    window.onresize = setTabsState
  },
  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle()
  },
  render() {
    let menuItems = [
      { type: MenuItem.Types.LINK, payload: FlowRouter.path('shoes'), text: 'Shoes' },
      { type: MenuItem.Types.LINK, payload: FlowRouter.path('clothes'), text: 'Clothes' },
      { type: MenuItem.Types.LINK, payload: FlowRouter.path('hats'), text: 'Hats' },
      { type: MenuItem.Types.SUBHEADER, text: 'Supporters' }
    ]

    return (
      <AppCanvas>
        <Header mobile={this.state.renderTabs} />
      <br/><br/><br/><br/>
        <div className="container">
          <main>{this.props.content}</main>
        </div>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
    </AppCanvas>
  )
}
})

const styles = {
  appbar: {
    position: 'fixed',
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 4
  }
}
