import React from "react"
import {ScrollView, View, Text, Image, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native"
import { useForm } from "react-hook-form";
import Logo from "./icon.png"
import { styles } from "./styles"
import Flex from "../../components/flex"

const index = () => {
    const { control, handleSubmit } = useForm()
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
                                name="email"
                                style={styles.input}
                            ></TextInput>
                        </View>
                        <View style={styles.textContainer}>
                            <Text
                                style={styles.mainText}
                            >Adgangskode</Text>
                            <TextInput
                                name="password"
                                style={styles.input}
                            ></TextInput>
                        </View>
                    </View>
                    <Text
                        style={styles.secondaryText}
                    >Registrer</Text>
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

export default index