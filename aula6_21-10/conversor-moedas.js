import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import { Picker } from '@react-native-picker/picker';
  import { useState } from 'react';
  
  export default function App() {
    const [valor, setValor] = useState(0);
    const [de, setDe] = useState('Dólar');
    const [para, setPara] = useState('Dólar');
    const [convertido, setConvertido] = useState(0);
  
    const moedas = ['Dólar', 'Euro', 'Real'];
    const pickerOptions = moedas.map((moeda) => {
      return <Picker.Item key="moeda" value={moeda} label={moeda} />;
    });
  
    const converter = () => {
      if (de === 'Dólar') {
        if (para == 'Dólar') setConvertido(valor);
        else if (para == 'Euro') setConvertido(valor * 0.94);
        else if (para == 'Real') setConvertido(valor * 5.03);
      } 
       if (de == 'Euro') {
        if (para == 'Dólar') setConvertido(valor * 1.06);
        else if (para == 'Euro') setConvertido(valor);
        else if (para == 'Real') setConvertido(valor * 5.34);
      } 
       if (de == 'Real') {
        if (para == 'Dólar') setConvertido(valor * 0.2);
        else if (para == 'Euro') setConvertido(valor);
        else if (para == 'Real') setConvertido(valor * 0.19);
      }
    };
  
    return (
      <View>
        <Text style={styles.titulo}> Conversor de moedas </Text>
        <Text style={styles.subtitulo}> Dolar, Real e Euro </Text>
  
        <View style={styles.container}>
          <View style={styles.formGroup}>
            <Text>Valor:</Text>
            <TextInput
              style={styles.input}
              placeholder="Preencha o valor"
              onChangeText={(value) => setValor(value)}></TextInput>
          </View>
          <View style={styles.formGroup}>
            <Text>De:</Text>
            <Picker style={styles.input} onValueChange={(de) => setDe(de)} selectedValue="Dólar">
              {pickerOptions}
            </Picker>
          </View>
          <View style={styles.formGroup}>
            <Text>Para:</Text>
            <Picker style={styles.input} onValueChange={(para) => setPara(para)} selectedValue="Dólar">
              {pickerOptions}
            </Picker>
          </View>
  
          <TouchableOpacity style={styles.calcular} onPress={converter}>
            <Text style={{ color: '#fff' }}> Calcular </Text>
          </TouchableOpacity>
  
          <Text style={styles.convertido}> {convertido} </Text>
          
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    titulo: {
      fontSize: '20px',
      color: '#ff0000',
      textAlign: 'center',
    },
    subtitulo: {
      fontSize: '18px',
      color: 'green',
      textAlign: 'center',
    },
    container: {
      margin: '10px',
      padding: '8px',
      gap: '10px',
    },
    input: {
      borderColor: '#000',
      borderWidth: '2px',
      height: '30px',
      flex: 1,
      padding: '5px',
    },
    formGroup: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      gap: '10px',
    },
    calcular: {
      alignSelf: 'center',
      backgroundColor: 'green',
      padding: '10px 40px',
      marginTop: '10px',
      borderRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2, // Este é o equivalente para sombra no Android
      margin: 10,
    },
    convertido: {
      textAlign: 'center',
      fontSize: '20px',
      color: 'green'
    }
  });
  