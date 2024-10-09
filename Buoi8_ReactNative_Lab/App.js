import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Screen1, Screen2 } from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Screen1"
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Screen1" component={Screen1} />
					<Stack.Screen name="Screen2" component={Screen2} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
	},
});
