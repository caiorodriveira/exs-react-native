import React, { Component } from 'react';
import {Text, View, StyleSheet, ScrollView, Image } from 'react-native';
function App(){
  return(
    <View style={styles.container}>
    <Text style={styles.title}>Vagas</Text>
      <ScrollView>
      <Text style={styles.h1}>Desenvolvedor Backend</Text>
      <View style={styles.desc}>
      <Text style={styles.textos}>Salário R$9.000,00 a R$10.000,00</Text>
      <Text style={styles.textos}>Descrição: conhecimento em: • .Net Core / C#; • WCF; • Construção e consumo de APIs Rest, SOAP, GraphQL e GRPC; • TDD; • Metodologias Ágeis Scrum/Kanban; • Git e GitFlow; • Dapper. Se você conhece ou deseja aprendizado em Python; F#; GO e Rust será um grande diferencial para oportunidade. Principais atividades: • Construir dos serviços, aplicações e componentes que implementam os processos de negócio. • Elaborar os testes unitários conforme os cenários especificados pelo QA.</Text>
      <Text style={styles.textos}>Contato: (11) 7777-9999</Text>
      </View>

      <Text style={styles.h1}>Engenheiro de Dados</Text>
      <View style={styles.desc}>
      <Text style={styles.textos}>Salário R$3000,00</Text>
      <Text style={styles.textos}>Descrição: Sólida Experiência com processamento de dados, compreensão sólida de conceitos de bancos de dados, modelagem de dados, SQL e Databricks, convivência com conceitos de modelagem de dados analíticos (Data Lake, Data Warehouse), capacidade de trabalhar em ambientes ágeis e colaborativos, habilidades de comunicação eficazes para colaborar com equipes interdisciplinares; </Text>
      <Text style={styles.textos}>Contato: (19) 4002-8922</Text>
      </View>
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
    margin: 30,
    fontSize: 40,
    color: 'red'
  },
  h1:{
    color: '#50A4F2',
    fontSize: 20,
    textAlign: 'center'
  },
  desc:{
    textAlign: 'center',
    padding: 20,
  },
  textos:{
    textAlign: 'start',
    fontSize: 15
  }
})
export default App;