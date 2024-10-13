// In App.js in a new project

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import CreateScreen from '../screen/CreateScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  const [matrixList, setMatrixList] = useState([]); // State quản lý danh sách matrix
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
      <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} matrixList={matrixList} />}
        </Stack.Screen>
        <Stack.Screen name="Create">
          {(props) => (
            <CreateScreen {...props} setMatrixList={setMatrixList} matrixList={matrixList} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;