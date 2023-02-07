import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainText: {
        color: "white",
        fontSize: 22,
    },
    secondaryText: {
        color: "white",
        fontSize: 16,
        marginTop: "2%",
        textDecorationLine: "underline"
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        borderColor: "black",
        borderWidth: 1,
    },
    view: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#595048"
    },
    outerInformationContainer: {
        display: "flex",
        width: "70%",
        alignItems: "flex-end"
    },
    innerInformationContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    textContainer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        marginTop: "8%"
    },
    loginButton: {
        width: "40%",
        backgroundColor: "red"
    }
})

export { styles }