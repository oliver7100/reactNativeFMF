import React from 'react'
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Logo from './icon.png'
import { styles } from './styles'

const index = () => {
  return (
    <View style={styles.view}>
      <Image source={Logo}></Image>
      <View style={styles.outerInformationContainer}>
        <View style={styles.innerInformationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Email</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Adgangskode</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
        <Text style={styles.secondaryText}>Registrer</Text>
      </View>
      <TouchableOpacity style>
        <Text>Log Ind</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index
