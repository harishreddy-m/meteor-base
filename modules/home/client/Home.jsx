const { Styles, List, ListItem, Paper, RaisedButton} = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs
const { ThemeManager, LightRawTheme } = Styles

Home.client.cmp.Home = React.createClass({
  render() {
    return (
      <div style={styles.container}>
      <Paper zDepth={2} style={styles.paper}>
        <div>
          <br/><br/><br/><br/>
          <h1>Home</h1>
          <br/><br/><br/>
          <p>Basic <b>Meteor - React - Material-UI</b> boilerplate</p>
          <p>Check the <b>Todos</b>-tab for a menu example</p>
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
