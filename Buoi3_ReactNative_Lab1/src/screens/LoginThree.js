import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LoginThree(props) {
	return (
		<LinearGradient
			colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
			style={{ flex: 100 }}
		>
			<View
				style={{
					flex: 60,
					justifyContent: 'flex-end',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<Image source={require('../../assets/lock.png')} />
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 25,
						marginVertical: 50,
						width: 200,
						textAlign: 'center',
					}}
				>
					FORGET {'\n'} PASSWORD
				</Text>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 16,
						textAlign: 'center',
						width: '80%',
					}}
				>
					Provide your account’s email for which you want to reset
					your password
				</Text>
			</View>
			<View
				style={{
					flex: 40,
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						width: '85%',
						backgroundColor: '#C4C4C4',
						height: '45px',
						marginVertical: 40,
					}}
				>
					<Image source={require('../../assets/mail.png')} />
					<TextInput
						placeholder="Email"
						placeholderTextColor={'black'}
					/>
				</View>

				<View
					style={{
						flex: 60,
						width: '100%',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-around',
							width: '100%',
						}}
					>
						<TouchableOpacity style={stylesBtn.btn}>
							<Text style={stylesBtn.textBtn}>NEXT</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</LinearGradient>
	);
}

const stylesBtn = StyleSheet.create({
	btn: {
		width: '85%',
		height: 48,
		backgroundColor: '#E3C000',
	},
	textBtn: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
		lineHeight: 48,
	},
});

export default LoginThree;
