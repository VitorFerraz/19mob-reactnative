import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';

import HeaderPlatform from './components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
         <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={ HomeScreen }
          options={{
            headerTitle: <HeaderPlatform/>,
          }} />
        <Stack.Screen name="Season" component={ SeasonScreen } />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}