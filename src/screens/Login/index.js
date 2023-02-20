import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { useAuthProvider } from '../../components/auth'
import Logo from './icon.png'
import { styles } from './styles'

const LoginScreen = ({navigation}) => {
  const {actions} = useAuthProvider()

  const [email, setEmail] = useState("mbin@skorstensgaard.dk")
  const [pwd, setPwd] = useState("mbin")

  return (
    <View style={styles.view}>
      <Image source={Logo}></Image>
      <View style={styles.outerInformationContainer}>
        <View style={styles.innerInformationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Email</Text>
            <TextInput 
              style={styles.input}
              onChangeText={setEmail}
              value={email}
            ></TextInput>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>Adgangskode</Text>
            <TextInput 
              style={styles.input}
              onChangeText={setPwd}
              value={pwd}>
            </TextInput>
          </View>
        </View>
        <Text onPress={() => navigation.navigate("Register")} style={styles.secondaryText}>Registrer</Text>
      </View>
      <TouchableOpacity
        onPress={
          () => actions.login(email, pwd)
        }
      >
        <Text>Log Ind</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen
