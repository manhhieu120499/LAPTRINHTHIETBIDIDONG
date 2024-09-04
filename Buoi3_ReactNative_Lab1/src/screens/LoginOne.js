import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function LoginOne(props) {
	return (
		<View style={{ flex: 100, backgroundColor: '#00CCF9' }}>
			<View
				style={{
					flex: 60,
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<Image source={require('../../assets/Ellipse_8.png')} />
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 25,
						marginVertical: 50,
						width: 200,
						textAlign: 'center',
					}}
				>
					GROW {'\n'} YOUR BUSINESS
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
						flex: 40,
						width: '85%',
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 16,
							textAlign: 'center',
						}}
					>
						We will help you to grow your business using online
						server
					</Text>
				</View>

				<View
					style={{
						flex: 60,
						flexDirection: 'row',
						justifyContent: 'space-around',
						width: '90%',
					}}
				>
					<TouchableOpacity style={stylesBtn.btn}>
						<Text style={stylesBtn.textBtn}>LOGIN</Text>
					</TouchableOpacity>
					<TouchableOpacity style={stylesBtn.btn}>
						<Text style={stylesBtn.textBtn}>SIGN UP</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const stylesBtn = StyleSheet.create({
	btn: {
		width: 119,
		height: 48,
		backgroundColor: '#E3C000',
		borderRadius: 10,
	},
	textBtn: {
		fontWeight: 'bold',
		fontSize: 20,
		textAlign: 'center',
		lineHeight: 48,
	},
});

export default LoginOne;
