import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainText: {
        color: "white",
        fontSize: 22,
    },
    image: {
        aspectRatio: 1,
        height: "25%"
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
        color: "black"
    },
    view: {
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        paddingVertical: "10%",
        alignItems: "center",
        backgroundColor: "#595048",
    },
    outerInformationContainer: {
        display: "flex",
        width: "70%",
        height: "35%",
        gap: 10,
        alignItems: "flex-end",
    },
    innerInformationContainer: {
        width: "100%",
        display: "flex",
        gap: 35,
        alignItems: "center",
    },
    textContainer: {
        display: "flex",
        alignItems: "center",
        width: "100%",
    },
    button: {
        width: "25%",
        height: "6%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C19A6B",
        borderRadius: 4
    },
    buttonText: {
        color: "black",
        fontSize: 18
    }
})

export { styles }