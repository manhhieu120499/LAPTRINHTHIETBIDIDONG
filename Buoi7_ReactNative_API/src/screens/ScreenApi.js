import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StatusBar,
	TextInput,
	Image,
} from 'react-native';

function ScreenApi(props) {
	const { navigate, goBack } = props.navigation;
	const [name, setName] = useState();
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 4,
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}
			>
				<Text
					style={{
						fontSize: 24,
						fontWeight: 'bold',
						color: 'rgba(131, 83, 226, 1)',
						textAlign: 'center',
						width: 180,
					}}
				>
					Manage Your Task
				</Text>
			</View>
			<View
				style={{
					flex: 2,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<View
					style={{
						width: '90%',
						height: 43,
						borderRadius: 15,
						flexDirection: 'row',
						paddingHorizontal: 10,
						alignItems: 'center',
						borderWidth: 1,
						borderColor: 'rgba(144, 149, 160, 1)',
					}}
				>
					<Image source={require('../../assets/email.png')} />
					<TextInput
						placeholder="Enter your name"
						placeholderTextColor={'rgba(188, 193, 202, 1)'}
						style={{
							width: '90%',
							paddingHorizontal: 8,
							color: 'black',
							height: '100%',
						}}
						value={name}
						onChangeText={(text) => setName(text)}
					/>
				</View>
			</View>
			<View style={{ flex: 2, alignItems: 'center' }}>
				<TouchableOpacity
					style={{
						backgroundColor: 'rgba(0, 189, 214, 1)',
						width: 190,
						height: 44,
						borderRadius: 12,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onPress={() =>
						navigate('ScreenApi02', {
							name,
						})
					}
				>
					<Text style={{ fontSize: 16, color: 'white' }}>
						GET STARTED {`->`}{' '}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ScreenApi;
