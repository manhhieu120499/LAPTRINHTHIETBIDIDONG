import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function LoginSeven(props) {
	return (
		<LinearGradient colors={['#FBCB00', '#BF9A00']} style={{ flex: 100 }}>
			<View
				style={{
					flex: 20,
					justifyContent: 'flex-end',
					paddingHorizontal: 20,
				}}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 25 }}>LOGIN</Text>
			</View>
			<View
				style={{
					flex: 50,
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						width: '90%',
						backgroundColor: '#C4C4C44D',
						borderColor: 'white',
						borderWidth: 1,
						height: 54,
						alignItems: 'center',
						paddingHorizontal: 10,
						marginBottom: 25,
					}}
				>
					<Image source={require('../../assets/avatar_user.png')} />
					<TextInput
						placeholder="Name"
						placeholderTextColor={'black'}
						style={{
							marginLeft: 15,
							width: '70%',
							height: 54,
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						width: '90%',
						backgroundColor: '#C4C4C44D',
						borderColor: 'white',
						borderWidth: 1,
						height: 54,
						alignItems: 'center',
						justifyContent: 'space-between',
						paddingHorizontal: 10,
					}}
				>
					<Image source={require('../../assets/lock1.png')} />
					<TextInput
						placeholder="Password"
						placeholderTextColor={'black'}
						style={{
							width: '70%',
							height: 54,
						}}
					/>
					<Image source={require('../../assets/eye.png')} />
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: 'black',
						width: '90%',
						height: 50,
						marginTop: 60,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 5,
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
					CREATE ACCOUNT
				</Text>
			</View>
		</LinearGradient>
	);
}

export default LoginSeven;
