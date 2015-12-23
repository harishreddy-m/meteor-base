// MainLayout
//  This is the main entrypoint
//  It renders the main menubar <Header />
//  and main content according to the router-paths
//
const CLIENTWIDTH = 768 // Collapses menubar below x pixels

injectTapEventPlugin()
const { AppCanvas, AppBar, MenuItem } = MUI
const { ThemeManager } = MUI.Styles

App.client.cmp.MainLayout = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object,
    appIsMobile: React.PropTypes.bool
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(App.client.myTheme),
      appIsMobile: this.state.appIsMobile
    }
  },

  componentWillMount() {
    let setMobile = function() {
      this.setState({appIsMobile: document.body.clientWidth <= CLIENTWIDTH})
    }.bind(this)
    setMobile()
    window.onresize = setMobile
  },
  _onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle()
  },
  render() {
    return (
      <AppCanvas>
        <App.client.cmp.Header mobile={this.state.appIsMobile} />
        <div className="container" style={styles.container}>
          <main>{this.props.content}</main>
        </div>
      </AppCanvas>
    )
  }
})

const styles = {
  container: {
    marginTop: 10
  }
}
