import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainText: {
        color: "white",
        fontSize: 22,
    },
    button: {
        width: "40%",
        height: "8%",
        backgroundColor: "#6F4E37",
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#5C4033",
        borderRadius: 6
    },
    buttonText: {
        color: "white",
        fontSize: 20
    },
    image:{
        resizeMode: "contain",
        width: "100%"
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
        borderRadius: 8
    },
    view: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#595048"
    },
    outerInformationContainer: {
        display: "flex",
        width: "100%",
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
    entireFrame: {
        width: "80%",
        height: "80%",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export { styles }