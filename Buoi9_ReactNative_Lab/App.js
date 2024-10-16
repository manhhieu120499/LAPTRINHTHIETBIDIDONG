import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Screen01 from "./src/screens/Screen01"
import Screen02 from "./src/screens/Screen02"
import Screen03 from "./src/screens/Screen03"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen01" screenOptions={{
        headerShown: true,
      }}>
        <Stack.Screen name = "Screen01" component={Screen01}/>
         <Stack.Screen name = "Screen02" component={Screen02}/>
         <Stack.Screen name = "Screen03" component={Screen03}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}