const {
    Styles,
    List, ListItem,
    Paper
} = MUI

const {SvgIcons,
  Menu, MenuItem
} = MUI.Libs
const { ThemeManager, LightRawTheme } = Styles

Todos = React.createClass({
  render() {
    return(
    <div>
      <Paper zDepth={2}>
        <br/><br/><br/><br/>
        <h1>Todos</h1>
        <p>Here will go all todos</p>
        <br/><br/><br/>
      </Paper>
    </div>
    )
  }
})
