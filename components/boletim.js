import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class Boletim extends Component  {
  render() {
   return (
     <View style={styles.container}>
       <Text style={styles.titulo}>Boletim Semanal de Informações</Text>
       <Image source={require('../src/img/boletimfoto.png')} />
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
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 36,
    marginBottom: 50,
    marginTop: 20,
    textAlign: 'center',
  },
});
