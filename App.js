import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import styles from './styles';

export default function App() {
    const [resultatText, setresultatText] = useState("");
    const [calcText, setCalcText] = useState("");
    const onButtonClick = (text) => {
        if (text == "=") {
            return calculateresultat();
        }
        setresultatText(resultatText + text);
    };

    const calculateresultat = () => {
        setCalcText(eval(resultatText));
    };

    const onOperationClick = (operation) => {
        let operations = ["DEL", "+", "-", "*", "/"];

        if (operation == "DEL") {
            return setresultatText(
                resultatText.toString().substring(0, resultatText.length - 1)
            );
        }
        if (operation == "AC") {
            setresultatText("");
            setCalcText(0);
            return;
        }
        if (operations.includes(resultatText.toString().split("").pop())) return;
        setresultatText(resultatText + operation);
    };

    return ( <
        View style = { styles.container } >
        <
        View style = { styles.resultat } >
        <
        Text style = { styles.resultatText } > { calcText } < /Text> <
        /View> <
        View style = { styles.calcul } >
        <
        Text style = { styles.calculText } > { resultatText } < /Text> <
        /View> <
        View style = { styles.boutons } >
        <
        View style = { styles.numeros } >
        <
        View style = { styles.row } >
        <
        TouchableOpacity onPress = {
            () => onButtonClick(1) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 1 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(2) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 2 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(3) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 3 < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.row } >
        <
        TouchableOpacity onPress = {
            () => onButtonClick(4) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 4 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(5) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 5 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(6) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 6 < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.row } >
        <
        TouchableOpacity onPress = {
            () => onButtonClick(7) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 7 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(8) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 8 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(9) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 9 < /Text> <
        /TouchableOpacity> <
        /View> <
        View style = { styles.row } >
        <
        TouchableOpacity onPress = {
            () => onButtonClick(".") }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > . < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick(0) }
        style = { styles.bouton } >
        <
        Text style = { styles.num } > 0 < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onButtonClick("=") }
        style = { styles.bouton } >
        <
        Text style = { styles.num } >= < /Text> <
        /TouchableOpacity> <
        /View> <
        /View> <
        View style = { styles.operations } >
        <
        TouchableOpacity onPress = {
            () => onOperationClick("DEL") }
        style = { styles.bouton } >
        <
        Text style = { styles.operationBouton } > DEL < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onOperationClick("AC") }
        style = { styles.bouton } >
        <
        Text style = { styles.operationBouton } > AC < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onOperationClick("+") }
        style = { styles.bouton } >
        <
        Text style = { styles.operationBouton } > + < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onOperationClick("-") }
        style = { styles.bouton } >
        <
        Text style = { styles.operationBouton } > - < /Text> <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onOperationClick("/") }
        style = { styles.bouton } >
        <
        Text style = { styles.operationBouton } > /</Text >
        <
        /TouchableOpacity> <
        TouchableOpacity onPress = {
            () => onOperationClick("*") }
        style = { styles.bouton } >
        <
        Text style = { styles.operationBouton } > * < /Text> <
        /TouchableOpacity> <
        /View> <
        /View> <
        /View>
    );
}