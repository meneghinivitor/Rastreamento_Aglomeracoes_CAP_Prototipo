import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Main from './components/main';
import Boletim from './components/boletim';
import Report from './components/report';
import Rastrear from './components/rastrear';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Bem Vindo',
            headerStyle: {backgroundColor: '#3740FE'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontWeight: 'bold'},
          }}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Boletim"
          component={Boletim}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rastrear"
          component={Rastrear}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
