import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, SafeAreaView } from 'react-native';

export default class Report extends Component  {
  render() {
   return (
    <SafeAreaView style={styles.container}> 
    <KeyboardAvoidingView style={styles.background}>
    <Text style={styles.titulo}>Reportar Aglomerações</Text>
     <Text style={styles.textStyle}>
          Você pode nos ajudar a controlar as aglomerações no nosso Campus Alto
          Paraopeba. Caso tenha visto alguma forma de aglomeração, faça sua
          parte e nos avise
        </Text>
        <Text style={styles.textStyle2}>Como ajudar?</Text>
        <Text style={styles.textStyle}>
          Digite abaixo em qual lugar(salas ou escritórios ou biblioteca ou R.U
          ou corredores ou portarias) em que você avistou uma aglomeração:
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Reportar lugares"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <View>
        <Button
          color="#3740FE"
          title="Reportar"
        /> 
        </View>
     </KeyboardAvoidingView>
     </SafeAreaView>
   );
 } 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 25,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 36,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  textStyle: {
    color: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'justify',
  },
  textStyle2: {
    color: '#3740FE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: 22,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#D3D3D3',
    width: '100%',
    marginTop: 20,
    marginBottom: 25,
    color: '#222',
    fontSize: 17,
    textAlign: 'center',
    borderRadius: 12,
    padding: 15,
  },
});
