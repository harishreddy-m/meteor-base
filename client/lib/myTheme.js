var Spacing = MUI.Styles.Spacing
var Colors = MUI.Styles.Colors
var ColorManipulator = MUI.Utils.ColorManipulator

myTheme = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blueGrey600,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.red300,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.grey100,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  }
}
