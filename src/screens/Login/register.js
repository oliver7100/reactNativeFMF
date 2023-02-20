import React from "react"
import {View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native"
import Logo from "./icon.png"
import { styles } from "./styles"

const RegisterScreen = () => {
    return(
        <View 
            style={styles.view}
        >
            <View style={styles.entireFrame}>
                <Image
                    style={styles.image}
                    source={Logo}
                >
                </Image>
                <View style={styles.outerInformationContainer}>
                    <View style={styles.innerInformationContainer}>
                        <View style={styles.textContainer}>
                            <Text
                                style={styles.mainText}
                            >Email</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={styles.mainText}
                            >Adgangskode</Text>
                            <TextInput
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <Text
                            style={styles.mainText}
                        >Bekræft Adgangskode</Text>
                        <TextInput
                            style={styles.input}
                        ></TextInput>
                    </View>
                    <Text
                        style={styles.secondaryText}
                    >Log Ind</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                    >Log Ind</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterScreen