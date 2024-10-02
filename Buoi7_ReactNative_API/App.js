import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenApi01 from './src/screens/ScreenApi01';
import ScreenApi from './src/screens/ScreenApi';
import ScreenApi02 from './src/screens/ScreenApi02';
import ScreenApi03 from './src/screens/ScreenApi03';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="ScreenApi"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="ScreenApi" component={ScreenApi} />
				<Stack.Screen name="ScreenApi02" component={ScreenApi02} />
				<Stack.Screen name="ScreenApi03" component={ScreenApi03} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
