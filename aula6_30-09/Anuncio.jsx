import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, Image } from 'react-native';
function App(){
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Anúncios</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <View style={styles.texto}>
        <Image
        style={styles.img}
        source={{uri:'https://cdn.icon-icons.com/icons2/577/PNG/256/ExecutiveCar_Black_icon-icons.com_54904.png'}}/>
        <Text style={styles.desc}>Preço R$35.000.{'\n'}Modelo: Toyota Corolla{'\n'}Ano: 2010</Text></View>

        <View style={styles.texto}>
        <Image
        style={styles.img}
        source={{uri:'https://cdn.icon-icons.com/icons2/577/PNG/256/ExecutiveCar_Black_icon-icons.com_54904.png'}}/>
        <Text style={styles.desc}>Preço R$35.000.{'\n'}Modelo: Toyota Corolla{'\n'}Ano: 2010</Text></View>

        <View style={styles.texto}>
        <Image
        style={styles.img}
        source={{uri:'https://cdn.icon-icons.com/icons2/577/PNG/256/ExecutiveCar_Black_icon-icons.com_54904.png'}}/>
        <Text style={styles.desc}>Preço R$35.000.{'\n'}Modelo: Toyota Corolla{'\n'}Ano: 2010</Text></View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  title:{
    textAlign: 'center',
    margin: 40,
    fontSize: 30,
    color: 'red'
  },
  texto:{
    textAlign: 'center',
    padding: 15
  },
  desc:{
    fontSize: 15,
    fontWeight: 'bold'
  },
  img:{
    height: 200,
    width: 200, 
  }
})
export default App;