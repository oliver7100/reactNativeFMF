import React, { useState } from "react"
import {View, Text, Image, TouchableOpacity,ScrollView} from "react-native"
import { TextInput } from "react-native-paper"
import Logo from "./icon.png"
import { styles } from "./styles"
import { useAuthProvider } from '../../components/auth'

const RegisterScreen = ({navigation}) => {

    const {actions} = useAuthProvider()

    const [email, setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [name, setName] = useState("")

    return(
        <ScrollView 
            contentContainerStyle={styles.view}
        >
            <Image
                style={styles.image}
                source={Logo}
            >
            </Image>
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
                            value={pwd}
                            label="Password"
                            onChangeText={setPwd}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setName}
                            value={name}
                            label="Navn"
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={
                    () => actions.register(email, pwd, name)
                    }
            >
                <Text
                    style={styles.buttonText}
                >Registrer</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={
                () => navigation.navigate("Login")
                }
            >
                <Text
                style={styles.buttonText}
                >Log Ind</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default RegisterScreen