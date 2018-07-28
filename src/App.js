import React, { Component } from 'react'
import Author from "./components/Author"
import {AppProvider} from "./components/context"


export default class App extends Component {
  render() {
    return (
      <AppProvider>
        <Author />
      </AppProvider>
    )
  }
}

