import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  function somar() {
    setContador(contador + 1);
  }

  function subtrair() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <View style={{ marginTop: 20 }}>

      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '700', color: 'blue' }}>
        Quantidade de pessoas
      </Text>
      <Text style={{ fontSize: 60, textAlign: 'center', fontWeight: '700', color: 'blue' }}>
        {contador}
      </Text>
      <View style={{margin: 10}}>
        <Button title="+" onPress={somar} color="#9cf542" />
      </View>
      <View  style={{margin: 10}}>
        <Button title="-" onPress={subtrair} color="#f54242" />
      </View>
    </View>
  );
}
