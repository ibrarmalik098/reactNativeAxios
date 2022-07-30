// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from '../screen/news';
import NewsRender from '../screen/newsrender';



function AppRouter() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News App" component={News} />
        <Stack.Screen name="Render" component={NewsRender} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;