const {
    Styles,
    List, ListItem,
    Paper
} = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs
const { ThemeManager, LightRawTheme } = Styles

Settings.client.cmp.Settings = React.createClass({
  render() {
    return (
      <div style={styles.container}>
      <Paper zDepth={2} style={styles.paper}>
        <div>
          <br/><br/><br/><br/>
          <h1>Empty paper</h1>
          <h1>Settings</h1>
          <br/><br/><br/>
          <p>Nothing to see here, please keep moving</p>
        </div>
      </Paper>
    </div>
    )
  }
})

const styles = {
  container:{
    paddingTop: '64px',
  },
  paper:{
    display:'flex',
    alignItems:'center',
    justifyContent: 'center',
    height: '450px',
    marginBottom: '10px'
  }
}
