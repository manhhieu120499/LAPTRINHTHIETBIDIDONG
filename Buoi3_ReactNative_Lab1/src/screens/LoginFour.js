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

function LoginFour(props) {
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
				<Text style={{ fontSize: 60, fontWeight: 'bold' }}>CODE</Text>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 20,
						marginVertical: 50,
						width: 200,
						textAlign: 'center',
					}}
				>
					VERIFICATION
				</Text>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 16,
						textAlign: 'center',
						width: '80%',
					}}
				>
					Enter ontime password sent on {'\n'}++849092605798
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
						justifyContent: 'center',
						width: '85%',
						marginVertical: 40,
					}}
				>
					<TextInput style={styles.textInputStyle} />
					<TextInput style={styles.textInputStyle} />
					<TextInput style={styles.textInputStyle} />
					<TextInput style={styles.textInputStyle} />
					<TextInput style={styles.textInputStyle} />
					<TextInput style={styles.textInputStyle} />
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
						<TouchableOpacity style={styles.btn}>
							<Text style={styles.textBtn}>VERIFY CODE</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
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
	textInputStyle: {
		width: 50,
		height: 50,
		borderWidth: 1,
		borderColor: 'black',
	},
});

export default LoginFour;
