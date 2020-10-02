import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import firebase from '../database/firebase';
import Geolocation from '@react-native-community/geolocation';

function getLocation() {
  Geolocation.getCurrentPosition(
    (pos) => {
      setLatitude(pos.coords.longitude);
      setLongitude(pos.coords.latitude);
    },
    (error) => Alert.alert('Erro', error.message),
    {
      enableHighAccuracy: false,
      timeout: 120000,
      maximumAge: 1000,
    },
  );
}

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

    main = () => {
      this.props.navigation.navigate('Main')
    }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <View style={styles.container2}>
        <Text style = {styles.textStyle}>
          Olá {this.state.displayName}.
        </Text>
        <Text style = {styles.textStyle}>
          Tudo bem com você?
        </Text>
        <Text style = {styles.textStyle2}>
        Para o funcionamento correto deste aplicativo, somente você deve usar este
        dispositivo móvel, você também precisará permitir o acesso à localização GPS
        em seu celular e por fim deve estar ligado à alguma rede Wi-Fi do do CAP
      </Text>
      <View style={styles.btnStyle}>
       <Button
          color="#3740FE"
          title="Permitir acesso à localização"
          onPress={getLocation}
        />
        </View>
        <View style={styles.btnStyle}>
           <Button
           color="#3740FE"
           title="Ir para o Menu Principal"
           onPress={() => this.main()}
        />
        </View>
        <View style={styles.btnStyle}>
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 20,
  },
  textStyle: {
    color: '#3740FE',
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 20
  },
  textStyle2: {
    textAlign: 'justify',
    fontSize: 22,
    marginBottom: 20,
  },
  btnStyle: {
    marginBottom: 20,
    marginTop: 20,
  },
});
