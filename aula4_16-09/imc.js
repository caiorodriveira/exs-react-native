import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  Button,
  View,
} from 'react-native';
import { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import imgDefault from './assets/snack-icon.png';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);
  const [situacao, setSituacao] = useState('');
  function calcImc() {
    setImc(peso / (((altura / 100) * (altura / 100))));
    return sit(peso / (((altura / 100) * (altura / 100))));
  }

  function sit(imc){
    if (imc < 18.5) {
      setSituacao('Abaixo do peso');
    } else if (imc < 24.9) {
      setSituacao('Peso ideal');
    } else if (imc < 29.9) {
      setSituacao('Acima do peso');
    } else if (imc < 34.9) {
      setSituacao('Obesidade I');
    } else if (imc < 39.9) {
      setSituacao('Obesidade II');
    } else if (imc >= 40) {
      setSituacao('Taporra Paloma');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image source={imgDefault} style={styles.imagem} />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        onChangeText={setAltura}
      />

      <Button title="Calcular" onPress={calcImc} />

      <Text style={styles.result}>
        {imc.toFixed(2)}
      </Text>

      <Text style={styles.result}>{situacao}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    margin: 12,
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 20,
    padding: 10,
  },
  result: {
    alignSelf: 'center',
    fontSize: '20px',
  },
  imagem: {
    width: '100px',
    height: '100px',
    alignSelf: 'center',
  },
});
