import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LoginScreen from './screens/login/Login';
import SignUpScreen from './screens/sigup/SignUp';
import ListScreen from './screens/list/List';
import { Image } from 'react-native';





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
      <Tab.Navigator
        screenOptions={{
          keyboardHidesTabBar: true,
        headerShown: false,


          tabBarStyle: [{ position: 'absolute' }]

        }}


      >

        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: () => (

              <Image source={require('./assets/list.png')} style={{ width: 24, height: 24, }} />
            ),
          }} />
        <Tab.Screen
          name="Account"
          component={LoginStackScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" color={"#4D4D4D"} size={34} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}