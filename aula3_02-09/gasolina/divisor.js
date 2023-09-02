import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { styles } from './styles';
import myImage from './assets/imagem2.png'

export default function App() {
    const [num, setNum] = useState('')
    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')
    
    function calculo(num, num2) {
        if (input != '') {
            let r = (num / num2)
            return setNum(r < 0.7 ? 'O mais vantajoso é o álcool' : 'O mais vantajoso é a gasolina')
        }
    }
    return (
        <View>
            <Text style={styles.texto}>Álcool ou Gasolina ?</Text>
            <Image source={myImage} style={styles.imagem} />


            <TextInput
                style={styles.input}
                placeholder="Preço do álcool"
                onChangeText={setInput}
            />
            <TextInput
                style={styles.input}
                placeholder="Preço da gasolina"
                onChangeText={setInput2}
            />

            <Button color='green' title="Verificar" onPress={() => calculo(input, input2)} />

            <Text style={styles.texto}> {num} </Text>
        </View>
    );
}