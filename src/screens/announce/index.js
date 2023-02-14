import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Announce = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text>Annoncer</Text>
      </View>
      <View style={styles.container}>
        <Text>Annoncer</Text>
      </View>
    </View>
  )
}

export default Announce

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '30%',
    margin: '10%',
    backgroundColor: '#D3D3D3',
  },
})
