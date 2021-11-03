import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LoginScreen from './screens/login/Login';
import SignUpScreen from './screens/sigup/SignUp';
import ListScreen from './screens/list/List';





const LoginStack = createNativeStackNavigator();

function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="Login" component={LoginScreen} />
      <LoginStack.Screen name="SignUp" component={SignUpScreen} />
    </LoginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}
        style={{ position: 'absolute' }}>
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: () => (

              <Entypo name="home" color={"black"} size={28} />
            ),
          }} />
        <Tab.Screen
          name="Login"
          component={LoginStackScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: () => (
              <FontAwesome name="user-circle" color={"black"} size={28} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}