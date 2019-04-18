import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
//import { version as reactNativeVersion } from './../node_modules/react-native/package.json'

export default class App extends React.Component<any, any> {
  state = {
    isLoadingComplete: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.ts to start working on your app!!!!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
