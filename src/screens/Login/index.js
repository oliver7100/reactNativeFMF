import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { TextInput } from "react-native-paper"
import { useAuthProvider } from '../../components/auth'
import Logo from './icon.png'
import { styles } from './styles'

const LoginScreen = ({navigation}) => {
  const {actions} = useAuthProvider()

  const [email, setEmail] = useState("test@test.dk")
  const [pwd, setPwd] = useState("test")

  return (
    <ScrollView contentContainerStyle={styles.view}>
      <Image 
        source={Logo}
        style={styles.image}
      ></Image>
      <View style={styles.outerInformationContainer}>
        <View style={styles.innerInformationContainer}>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              label="Email"
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPwd}
              value={pwd}
              label="Password"
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={
          () => actions.login(email, pwd)
        }
      >
        <Text
          style={styles.buttonText}
        >Log Ind</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={
          () => navigation.navigate("Register")
        }
      >
        <Text
          style={styles.buttonText}
        >Registrer</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default LoginScreen
