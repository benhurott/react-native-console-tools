/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, Button, ScrollView } from 'react-native'

import { configure } from './lib'

configure({ enabled: __DEV__ })

export default class App extends Component {
    componentDidMount() {
        RNCT.asyncStorage.logAll()
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <Button
                        title={'RNCT.asyncStorage.logAll()'}
                        onPress={() => RNCT.asyncStorage.logAll()}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    button: {
        minHeight: 50,
        width: '80%'
    }
})
