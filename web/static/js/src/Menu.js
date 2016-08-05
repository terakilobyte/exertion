import React from 'react'
import {render} from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import {red500, green500} from 'material-ui/styles/colors'

const styles = {
  title: {
    cusor: 'pointer',
    textAlign: 'center'
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 25
  }
}

injectTapEventPlugin()

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      additional: false
    }
    this.handleTouchTap = this.handleTouchTap.bind(this)
  }

  handleTouchTap () {
    this.setState({additional: !this.state.additional})
  }

  render () {
    const add = this.state.additional && <div>LOL</div> || ''

    return (
      <div>
        <MuiThemeProvider>
          <AppBar title={<span style={styles.title}>Exertion</span>}
            onTitleTouchTap={this.handleTouchTap}
            iconElementRight={<AccountCircle color={red500} hoverColor={green500} onClick={this.handleTouchTap} style={styles.icon} />}
          />
        </MuiThemeProvider>
        {add}
      </div>
    )
  }
}

export default Menu

render(
  <Menu />,
  document.getElementById('app')
)
