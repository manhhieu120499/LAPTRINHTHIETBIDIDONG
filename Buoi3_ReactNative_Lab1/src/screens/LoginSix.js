import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	TextInput,
	StyleSheet,
} from 'react-native';
import Checkbox from 'expo-checkbox';

function LoginSix(props) {
	return (
		<View style={{ flex: 100 }}>
			<View
				style={{
					flex: 15,
					justifyContent: 'flex-end',
					alignItems: 'center',
				}}
			>
				<Text style={{ fontSize: 25, fontWeight: 'bold' }}>
					REGISTER
				</Text>
			</View>
			<View
				style={{
					flex: 60,
					justifyContent: 'flex-end',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<View style={styles.textInputStyles}>
					<TextInput
						placeholder="Name"
						placeholderTextColor={'black'}
					/>
				</View>
				<View style={styles.textInputStyles}>
					<TextInput
						placeholder="Phone"
						placeholderTextColor={'black'}
					/>
				</View>
				<View style={styles.textInputStyles}>
					<TextInput
						placeholder="Email"
						placeholderTextColor={'black'}
					/>
				</View>

				<View style={styles.textInputStyles}>
					<TextInput
						placeholder="Password"
						placeholderTextColor={'black'}
						secureTextEntry={true}
					/>
					<Image source={require('../../assets/eye.png')} />
				</View>
				<View style={styles.textInputStyles}>
					<TextInput
						placeholder="Birthday"
						placeholderTextColor={'black'}
					/>
				</View>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
						width: '90%',
						paddingHorizontal: 20,
					}}
				>
					<View style={{ flexDirection: 'row', marginRight: 60 }}>
						<Checkbox
							style={{
								width: 20,
								height: 20,
								borderRadius: 10,
								marginRight: 8,
							}}
						/>
						<Text>Male</Text>
					</View>
					<View style={{ flexDirection: 'row' }}>
						<Checkbox
							style={{
								width: 20,
								height: 20,
								borderRadius: 10,
								marginRight: 8,
							}}
						/>
						<Text>Female</Text>
					</View>
				</View>
			</View>
			<View style={{ flex: 25, alignItems: 'center' }}>
				<TouchableOpacity
					style={{
						width: '90%',
						alignItems: 'center',
						height: 45,
						justifyContent: 'center',
						backgroundColor: '#E53935',
						borderRadius: 2,
						marginTop: 30,
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 20,
							fontWeight: 'bold',
						}}
					>
						REGISTER
					</Text>
				</TouchableOpacity>
				<Text style={{ marginTop: 15 }}>
					When you agree to terms and conditions
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	textInputStyles: {
		flexDirection: 'row',
		width: '90%',
		height: 54,
		backgroundColor: '#C4C4C4',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		marginBottom: 25,
	},
});

export default LoginSix;
