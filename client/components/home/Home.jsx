const { Styles, List, ListItem, Paper, RaisedButton} = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs
const { ThemeManager, LightRawTheme } = Styles

Home = React.createClass({
  render() {
    return (
      <div>
      <Paper zDepth={2}>
        <br/><br/><br/><br/>
        <h1>Home</h1>
        <br/><br/><br/>
      <RaisedButton label="My Button" />
    <RaisedButton label="Primary" primary={true} />
  <RaisedButton label="Secondary" secondary={true} />
      </Paper>
    </div>

    )
  }
})
