import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

function LoginEight(props) {
	return (
		<View style={{ flex: 100 }}>
			<View
				style={{
					flex: 30,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image source={require('../../assets/eyeball.png')} />
			</View>
			<View style={{ flex: 50, marginHorizontal: 20 }}>
				<View
					style={{
						borderBottomColor: '#000',
						borderBottomWidth: 1,
						flexDirection: 'row',
						marginBottom: 40,
					}}
				>
					<Image source={require('../../assets/user1.jpg')} />
					<View style={{ width: 10 }} />
					<TextInput
						placeholder="Please input user name"
						style={{ fontSize: 20 }}
					/>
				</View>
				<View
					style={{
						borderBottomColor: '#000',
						borderBottomWidth: 1,
						flexDirection: 'row',
						marginBottom: 50,
						height: 50,
						alignItems: 'center',
					}}
				>
					<Image source={require('../../assets/lock2.png')} />
					<View style={{ width: 18 }} />
					<TextInput
						placeholder="Please input password"
						style={{ fontSize: 20 }}
					/>
				</View>
				<View style={{ alignItems: 'center' }}>
					<TouchableOpacity
						style={{
							backgroundColor: '#386FFC',
							alignItems: 'center',
							width: '100%',
							padding: 13,
							borderRadius: 10,
							marginBottom: 20,
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							LOGIN
						</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Text style={{ fontSize: 20 }}>Register</Text>
					<Text style={{ fontSize: 20 }}>Forgot Password</Text>
				</View>
			</View>
			<View style={{ flex: 20, marginHorizontal: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 30,
					}}
				>
					<View
						style={{
							backgroundColor: '#0E18F5',
							height: 2,
							width: '20%',
						}}
					/>
					<Text
						style={{
							width: '60%',
							textAlign: 'center',
							fontSize: 20,
						}}
					>
						Other login methods
					</Text>
					<View
						style={{
							backgroundColor: '#0E18F5',
							height: 2,
							width: '20%',
						}}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<Image source={require('../../assets/user3.png')} />
					<Image source={require('../../assets/wifi.png')} />
					<View
						style={{
							backgroundColor: '#3A579C',
							width: 70,
							borderRadius: 7,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Image source={require('../../assets/facebook1.png')} />
					</View>
				</View>
			</View>
		</View>
	);
}

export default LoginEight;
