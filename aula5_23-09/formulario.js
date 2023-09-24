import { Text, TextInput, View, StyleSheet, Switch, Pressable } from 'react-native';

import Slider from '@react-native-community/slider';
// You can import supported modules from npm
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';

export default function App() {
  const [nome, setNome] = useState(null);
  const [idade, setIdade] = useState(null);
  const [sexo, setSexo] = useState(null);
  const [escolaridade, setEscolaridade] = useState(null);
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState(false);
  const [dados, showDados] = useState(false);
  
  
    let userData = (
      <View>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color:'blue'}}> Dados Informados</Text>
        <Text>Nome: {nome}</Text>
        <Text>Idade: {idade}</Text>
        <Text>Sexo: {sexo}</Text>
        <Text>Escolaridade: {escolaridade}</Text>
        <Text>Limite: R$ {limite.toFixed(2).replace(".",",")}</Text>
        <Text>Brasileiro: {brasileiro? 'Brasileiro': 'Estrangeiro'}</Text>
      </View>
    )
    
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Abertura de Conta </Text>
      <View style={styles.formGroup}>
        <Text>Nome:</Text>
        <TextInput
          placeholder="Preencha seu nome"
          style={styles.input}
          onChangeText={(nome) => setNome(nome)}></TextInput>
      </View>

      <View style={styles.formGroup}>
        <Text>Idade:</Text>
        <TextInput
          placeholder="Preencha sua idade"
          style={styles.input}
          onChangeText={(idade) => setIdade(idade)}></TextInput>
      </View>

      <View style={styles.formGroup}>
        <Text>Sexo:</Text>
        <Picker
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
          <Picker.Item key={1} value={'Masculino'} label="Masculino" />
          <Picker.Item key={2} value={'Feminino'} label="Feminino" />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text>Escolaridade:</Text>
        <Picker
          style={styles.input}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}>
          <Picker.Item
            key={'escolaridade'}
            value={'Ensino Fundamental'}
            label="Ensino Fundamental"
          />
          <Picker.Item
            key={'escolaridade'}
            value={'Ensino Medio'}
            label="Ensino Médio"
          />
          <Picker.Item
            key={'escolaridade'}
            value={'Ensino Superior'}
            label="Ensino Superior"
          />
          <Picker.Item
            key={'escolaridade'}
            value={'Mestrado'}
            label="Mestrado"
          />
          <Picker.Item
            key={'escolaridade'}
            value={'Doutorado'}
            label="Doutorado"
          />
        </Picker>
      </View>

      <View style={styles.formGroup}>
        <Text>Limite: </Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(value) => setLimite(value)}
          value={limite}
        />
        <Text>{limite.toFixed(0)}</Text>
      </View>

      <View style={styles.formGroup}>
        <Text>Brasileiro:</Text>
        <Switch
          value={brasileiro}
          onValueChange={(value) => setBrasileiro(value)}
        />
      </View>

      <Pressable style={styles.confirmar} onPress={() => showDados(true)}> Confirmar </Pressable>

      {dados? userData: null}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: '20px',
    padding: 8,
    gap: '10px',
  },
  titulo: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'darkred',
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
  confirmar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '8px',
    borderRadius: '5px',
    textAlign: 'center'
  }
});
