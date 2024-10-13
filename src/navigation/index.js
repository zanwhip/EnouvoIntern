import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import CreateScreen from '../screen/CreateScreen';
import MatrixDetailScreen from '../screen/MatrixDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  const [matrixList, setMatrixList] = useState([]); // State quản lý danh sách matrix

  const updateMatrix = (index, updatedMatrix) => {
    setMatrixList((prevMatrixList) => {
      const newMatrixList = [...prevMatrixList];
      newMatrixList[index] = updatedMatrix;
      return newMatrixList;
    });
  };

  const deleteMatrix = (index) => {
    setMatrixList((prevMatrixList) => {
      return prevMatrixList.filter((_, i) => i !== index);
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} matrixList={matrixList} />}
        </Stack.Screen>
        <Stack.Screen name="Create">
          {(props) => (
            <CreateScreen {...props} setMatrixList={setMatrixList} matrixList={matrixList} />
          )}
        </Stack.Screen>
        <Stack.Screen name="MatrixDetail">
          {(props) => (
            <MatrixDetailScreen {...props} updateMatrix={updateMatrix} deleteMatrix={deleteMatrix} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
