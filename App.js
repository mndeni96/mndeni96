/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createstackNavigator} from "@react-navigation/stacks";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Homescreen = () => {
  return (
    <View style={{ flex:1, alignItems:'center',justifyContent: 'center'}}>
      
    </View>
  );
};

const Stack = createstackNavigator() ;

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen name="Home" component={Homescreen} />
      </Stack.Navigator>

     </NavigationContainer>

  );
}


export default App  