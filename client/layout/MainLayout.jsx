// MainLayout
//  This is the main entrypoint
//  It renders the main menubar <Header />
//  and main content according to the router-paths
//
const CLIENTWIDTH = 768 // Collapses menubar below x pixels

injectTapEventPlugin()
const { AppCanvas, AppBar, MenuItem } = MUI
const { ThemeManager } = MUI.Styles

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
    let setMobile = function() {
      this.setState({mobile: document.body.clientWidth <= CLIENTWIDTH})
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
        <Header mobile={this.state.mobile} />
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
