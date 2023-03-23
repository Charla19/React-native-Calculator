import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultat: {
        flex: 2,
        backgroundColor: "#434343",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    resultatText: {
        fontSize: 80,
        color: "white",
    },
    calculText: {
        fontSize: 40,
        color: "black",
        fontWeight: "bold",
    },
    num: {
        fontSize: 30,
        color: "white",
    },
    calcul: {
        flex: 1,
        backgroundColor: "#434350",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    bouton: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "stretch",
        fontSize: "30",
    },
    boutons: {
        flex: 7,
        flexDirection: "row",
    },
    numeros: {
        flex: 3,
        backgroundColor: "#434343",
    },
    row: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    operations: {
        flex: 1,
        backgroundColor: "#434350",
        alignItems: "center",
        justifyContent: "space-around",
    },
    operationBouton: {
        fontSize: 30,
        color: "white",
    },
});

export default styles;