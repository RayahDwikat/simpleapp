import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Calendar from '../screens/Calendar'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" options={{header: ()=>null}} component={Home} />
        <Stack.Screen name="Calendar" options={{header: ()=>null}} component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
