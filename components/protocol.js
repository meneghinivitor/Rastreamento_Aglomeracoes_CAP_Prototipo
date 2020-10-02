import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';

export default class Protocol extends Component  {
  render() {
   return (
    <View style={styles.container}>
      <Text style={styles.tituloPrincipal}>Protocolos e Orientações</Text>
    <Text style={styles.titulo}>Protocolos em Minas Gerais</Text>
    <Text style={styles.subTitulo} onPress={() => Linking.openURL('http://coronavirus.saude.mg.gov.br/protocolos')}>
       http://coronavirus.saude.mg.gov.br/protocolos
     </Text>
     <Text style={styles.titulo}>Orientações</Text>
     <Text style={styles.texto}>Mantenha distânciamento de 2 metros </Text>
     <Text style={styles.texto}>
       Lave bem as mãos com água e sabão ou álcool em gel 70%{' '}
     </Text>
     <Text style={styles.texto}>
       Desinfete seu celular, chaves e cartôes bancáros com álcool em 70%
       cuidadosamente{' '}
     </Text>
     <Text style={styles.texto}>
       Procure atendimento médico em caso de febre, tosse e dificuldades
       respiratórias{' '}
     </Text>
  </View>
   );
 } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tituloPrincipal: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 36,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
  },
  subTitulo: {
    color: '#3201a8',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 22,
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  texto: {
    color: '#000',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
});