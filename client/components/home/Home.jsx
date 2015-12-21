const {
    Styles,
    List, ListItem,
    Paper
} = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs
const { ThemeManager, LightRawTheme } = Styles

Home = React.createClass({
  render() {
    console.log("todos");
    return (
      <div>
      <Paper zDepth={2}>
        <br/><br/><br/><br/>
        <h1>Home</h1>
        <br/><br/><br/>
      </Paper>
    </div>

    )
  }
})
