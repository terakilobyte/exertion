// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import 'phoenix_html'
import React from 'react'
import {render} from 'react-dom'
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import PresentationComponent from './src/components/PresentationCard'
import Navigation from './src/components/Navigation' //eslint-disable no-unused-vars

class Wrapper extends React.Component {
  render () {
    return (
      <div>
        <Navigation />
        <h3>Make the juice worth the <span className='squeeze'><em>squeeze</em></span></h3>
        <PresentationComponent content='Hire' />
        <PresentationComponent content='Work' />
      </div>
    )
  }
}

render(
  <Wrapper />,
  document.getElementById('app')
)
