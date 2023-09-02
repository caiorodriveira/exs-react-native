import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
function App() {
    const [num, setNum] = useState('')
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    function multiplica(num, num2) {
        if (input != '') {
            return setNum(num * num2)
        }
        else {
            alert('Campo Vazio')
        }
    }
    return (
        <View style={styles.area}>
            <TextInput
                style={styles.input}
                placeholder="Digite o primeiro n°"
                onChangeText={setInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o segundo n°"
                onChangeText={setInput2}
            />
            <Button title="Calcular" onPress={() => { multiplica(input, input2) }} />
            <Text style={styles.texto}> {num} </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        fontSize: 20,
        padding: 10,
    },
    texto: {
        textAlign: 'center',
        fontSize: 25,
    }
})
export default App;