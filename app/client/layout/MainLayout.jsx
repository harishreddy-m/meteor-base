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
      <div style={styles.site}>
        <App.client.cmp.Header mobile={this.state.appIsMobile} />
        <div  style={styles.content}>
          <div>{this.props.content}</div>
        </div>
        <div style={styles.footer}>
          <App.client.cmp.Footer mobile={this.state.appIsMobile} />
        </div>
      </div>
    )
  }
})

const styles = {
  site :{
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  content:{
    flex: '1 0 auto'
  },
  footer:{
    flex: 'none',
    backgroundColor: '#EEF'
  }
}
