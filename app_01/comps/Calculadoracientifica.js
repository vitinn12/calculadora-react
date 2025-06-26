import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function CalculadoraCientifica() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.text}>Calculadora Cientifica em construção!</Text>
                <Text style={styles.botao} onPress={() => navigation.goBack()}>Voltar</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    card: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '200px',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: "#333",
    },
    botao: {
        padding: 10,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
    },
});