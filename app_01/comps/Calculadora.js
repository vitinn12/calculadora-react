import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function Calculadora() {
    const [expressao, setExpressao] = useState("");
    const [historico, setHistorico] = useState([]);
    
    function handlePress(valor) {
        if (valor === "AC") return setExpressao("");
        if (valor === "DEL") return setExpressao(expressao.slice(0, -1));
        if (valor === "=") {
            const operadores = ["+", "-", "*", "/"];
            const operadorEncontrado = operadores.find(o => expressao.indexOf(o, 1) > 0);
            if (operadorEncontrado) {
                const pos = expressao.indexOf(operadorEncontrado, 1);
                const n1 = parseFloat(expressao.slice(0, pos));
                const n2 = parseFloat(expressao.slice(pos + 1));
                let resultado = 0;
                if (operadorEncontrado === "+") resultado = n1 + n2;
                if (operadorEncontrado === "-") resultado = n1 - n2;
                if (operadorEncontrado === "*") resultado = n1 * n2;
                if (operadorEncontrado === "/") resultado = n1 / n2;
                setHistorico([expressao + " = " + resultado, ...historico]);
                setExpressao(String(resultado));
            } else {
                setExpressao("Erro");
            }
            return;
        }
        if (valor === "+/-" && expressao && !isNaN(expressao)) {
            return setExpressao(String(-parseFloat(expressao)));
        }
        if (valor === "%" && expressao && !isNaN(expressao)) {
            return setExpressao(String(parseFloat(expressao) / 100));
        }
        setExpressao(expressao === "Erro" ? valor : expressao + valor);
    }

    return (
        <View style={styles.areatotal}>
            <View style={styles.areacalculo}>
                <View style={styles.areahistorico}>
                    <Text style={styles.textoareahistorico}>Histórico</Text>
                    <ScrollView>
                        {historico.map((item, i) => (
                            <Text key={i} style={styles.valorareahistorico}>{item}</Text>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.areaexprecao}>
                    <Text style={styles.textoareaexpressao}>{expressao}</Text>
                </View>
            </View>
            <View style={styles.areateclas}>
                <View style={styles.arealinha}>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("AC")}><Text>AC</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("DEL")}><Text>DEL</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("%")}><Text>%</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("/")}><Text>/</Text></TouchableOpacity>
                </View>
                <View style={styles.arealinha}>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("7")}><Text>7</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("8")}><Text>8</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("9")}><Text>9</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("*")}><Text>*</Text></TouchableOpacity>
                </View>
                <View style={styles.arealinha}>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("4")}><Text>4</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("5")}><Text>5</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("6")}><Text>6</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("-")}><Text>-</Text></TouchableOpacity>
                </View>
                <View style={styles.arealinha}>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("3")}><Text>3</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("2")}><Text>2</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("1")}><Text>1</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("+")}><Text>+</Text></TouchableOpacity>
                </View>
                <View style={styles.arealinha}>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("0")}><Text>0</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress(".")}><Text>.</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("+/-")}><Text>+/-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.areabotao} onPress={() => handlePress("=")}><Text>=</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    areatotal: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    areacalculo: {
        flex: 2,
        borderWidth: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    areateclas: {
        flex: 3,
        borderWidth: 1,
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%'
    },
    areahistorico: {
        padding: 10,
        flex: 2,
        borderWidth: 1,
    },
    textoareahistorico: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    valorareahistorico: {
        fontSize: 18,   
    },
    areaexprecao: {
        flex: 1,
        borderWidth: 1
    },
    arealinha: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'nowrap'
    },
    areabotao: {
        borderWidth: 1,
        backgroundColor: 'gray',
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textoareaexpressao: {
        fontSize: 40,
        padding: 15,
        textAlign: 'end',
    },
});