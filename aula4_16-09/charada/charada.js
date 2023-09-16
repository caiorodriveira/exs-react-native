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
  import imgDefault from './assets/charada.png';
  
  export default function App() {
    const [al, setAl] = useState(0);
  
  
  
    return (
      <SafeAreaView style={styles.container}>
        <Image source={imgDefault} style={styles.imagem} />
  
        <Text style={{fontSize: '20px', textAlign: 'center'}}> Pense em um número de 0 à 10 </Text>
        <View style={{borderBottomWidth: '1px', marginHorizontal: '10px', marginBottom: '10px'}}>
          <Text style={styles.result}>{al}</Text>
        </View>
  
        <Button title="Descubra" onPress={() => setAl(Math.floor(Math.random() * 11))} />
  
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
    result: {
      alignSelf: 'center',
      fontSize: '20px',
      marginBottom: '10px',
      borderBottomColor: '#000',
      
    },
    imagem: {
      width: '100px',
      height: '100px',
      alignSelf: 'center',
      marginBottom: '30px'
    },
  });
  