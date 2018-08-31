![logo](docs/images/rnct-logo.png)

Simple console commands to help you debug your React-Native application

## Motivation

When we are developing React-Native applications, we want to log some things from the app or trigger some action but we don't want to install another tools in our computer, just use the debugger.

Instead import the RN libs and make a console log, we can use some helpful functions, like `log all async storage items` while debugging:

```jsx
export default class App extends Component {
    componentDidMount() {
        RNCT.asyncStorage.logAll()
    }
    render() {
        return <View style={styles.container} />
    }
}
```

You don't need to import `RNCT`, it's a global variable.

## Installation

### Install

To install, run `yarn add --dev react-native-console-tools` or `npm install --save-dev react-native-console-tools`

### Configuration

Once installed, at startup of your app, call the `configure` function:

```jsx
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import { configure } from 'react-native-console-tools'

configure({ enabled: __DEV__ }) //<--- here

export default class App extends Component {
    componentDidMount() {
        RNCT.asyncStorage.logAll()
    }
    render() {
        return <View style={styles.container} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
})
```

That's it!

## Available Loggers

### AsyncStorage

You can call any method of `AsyncStorage` from `RNCT.asyncStorage`, plus:

#### `RNCT.asyncStorage.logAll`

It will log all saved items in the async storage.

usage:

```jsx
RNCT.asyncStorage.logAll()
```

## Thanks to

<div>Icons made by <a href="https://www.flaticon.com/authors/dmitri13" title="dmitri13">dmitri13</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
