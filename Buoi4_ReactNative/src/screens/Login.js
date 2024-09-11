import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	StyleSheet,
	Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Login(props) {
	const [content, setContent] = useState('Forgot your password?');
	const [user, setUser] = useState('');
	const [ps, setPassword] = useState('');
	const validatation = (us, pws) => {
		if (us === 'nguyensang@gmail.com' && pws === '123') return true;
		return false;
	};
	return (
		<LinearGradient colors={['#FBCB00', '#BF9A00']} style={{ flex: 100 }}>
			<View
				style={{
					flex: 30,
					justifyContent: 'center',
				}}
			>
				<Text
					style={{ fontSize: 30, color: 'black', fontWeight: 'bold' }}
				>
					LOGIN
				</Text>
			</View>
			<View
				style={{
					flex: 40,
					alignItems: 'center',
				}}
			>
				<View style={styles.input}>
					<Image
						source={require('../../assets/img/avatar_user.png')}
					/>
					<TextInput
						placeholder="Name"
						placeholderTextColor={'black'}
						style={{ width: '85%', fontSize: 17 }}
						onChangeText={(text) => setUser(text)}
					/>
				</View>
				<View style={styles.input}>
					<Image source={require('../../assets/img/lock.png')} />
					<TextInput
						placeholder="Password"
						placeholderTextColor={'black'}
						style={{ width: '70%', fontSize: 17 }}
						onChangeText={(text) => setPassword(text)}
					/>
					<Image source={require('../../assets/img/eye.png')} />
				</View>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => {
						if (validatation(user, ps))
							setContent('Login successful!');
						else setContent('Login failed!');
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: 'white',
						}}
					>
						LOGIN
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 30, alignItems: 'center' }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
					{content}
				</Text>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	input: {
		flexDirection: 'row',
		height: 54,
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'white',
		width: '90%',
		marginVertical: 20,
	},
	btn: {
		width: '90%',
		height: 45,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 20,
		borderRadius: 5,
	},
});

export default Login;
