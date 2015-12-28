# MUI Starter App
----------------------------------------

A Todo app as a basic starter template for __Meteor - React__ using __Material-ui__
> Beta, not really ready for production, but use it for ideas and concepts

## Uses
* [Meteor](https://www.meteor.com/) ( v1.2.1)
* [Material-UI](http://www.material-ui.com/)
* [FlowRouter](https://github.com/kadirahq/flow-router/)
* [ReactLayout](https://github.com/kadirahq/meteor-react-layout/)

## Includes
* An AppBar Menu-header using Tabs-items as navigation
  * AppBar Collapses for mobile view
  * AppBar menu-items from array / store

* Todos module with sidemenu
  * Expanded sidemenu in DesktopView
  * FloatingActionButton for a collapsed sidemenu in MobileView
* No CSS, all flexbox

## Modular design
* Everything is kept in namespaced modules, based on the [Modular Pattern](https://themeteorchef.com/snippets/using-the-module-pattern-with-meteor/) from The Meteor Chef.
* Modular folder structure: all modules are selfcontained in their respective folders.

## Installation
* `git clone git@bitbucket.org:eleventy/reacttodo.git`
* `cd reacttodo`
* `meteor`

## Based on / Thanks to
* [TopShop template](https://github.com/codterpin/top-shop)
* [ForumPost: Material UI Lessons Learned](https://forums.meteor.com/t/material-ui-lessons-learned/15091)
* [The Meteor chef](https://themeteorchef.com)
