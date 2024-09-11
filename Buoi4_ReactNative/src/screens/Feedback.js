import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

function Feedback(props) {
	const [message, setMessage] = useState('');
	return (
		<View style={{ flex: 100 }}>
			<View
				style={{
					flex: 15,
					flexDirection: 'row',
					alignItems: 'flex-end',
					paddingHorizontal: 10,
					width: '100%',
					justifyContent: 'space-between',
				}}
			>
				<View style={{ width: '25%', justifyContent: 'center' }}>
					<Image source={require('../../assets/img/usb.png')} />
				</View>

				<Text style={{ fontSize: 16, width: '75%' }}>
					USB Bluetooth Music Receiver HJX-001- Biến loa thường thành
					loa bluetooth
				</Text>
			</View>
			<View
				style={{
					flex: 30,
					width: '100%',
					alignItems: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 20,
						fontWeight: 'bold',
						marginTop: 30,
						marginBottom: 20,
					}}
				>
					Cực kỳ hài lòng
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Image source={require('../../assets/img/Star.png')} />
					<Image source={require('../../assets/img/Star.png')} />
					<Image source={require('../../assets/img/Star.png')} />
					<Image source={require('../../assets/img/Star.png')} />
					<Image source={require('../../assets/img/Star.png')} />
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						borderWidth: 1,
						borderColor: 'blue',
						width: '70%',
						height: 50,
						marginTop: 30,
						justifyContent: 'center',
						borderRadius: 10,
					}}
				>
					<Image source={require('../../assets/img/camera.png')} />
					<Text
						style={{
							marginLeft: 10,
							fontSize: 17,
							fontWeight: 'bold',
						}}
					>
						Thêm hình ảnh
					</Text>
				</View>
			</View>
			<View
				style={{
					flex: 35,
					width: '100%',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: '90%',
						borderWidth: 1,
						borderColor: '#C4C4C4',
						borderRadius: 10,
					}}
				>
					<TextInput
						style={{
							width: '95%',
							height: 230,
							fontSize: 20,
							paddingHorizontal: 5,
							alignSelf: 'center',
							textAlignVertical: 'top',
						}}
						placeholder={`Hãy chi sẻ những điều mà bạn thích \nvề sản phẩm`}
						placeholderTextColor={'#C4C4C4'}
						onChangeText={(text) => setMessage(text)}
						value={message}
					/>
					<Text
						style={{
							fontSize: 12,
							fontWeight: 'bold',
							alignSelf: 'flex-end',
							paddingHorizontal: 10,
							height: 30,
							paddingVertical: 6,
						}}
					>
						https://meet.google.com/nsj-ojwi-xpp
					</Text>
				</View>
			</View>
			<View
				style={{
					flex: 20,
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<TouchableOpacity
					style={{
						width: '90%',
						backgroundColor: 'blue',
						height: 50,
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: 10,
					}}
					onPress={() => {
						if (message.length > 0) {
							alert('Send feebback successful!');
							setMessage('');
						} else alert('Please enter your feedback!');
					}}
				>
					<Text
						style={{
							fontSize: 24,
							fontWeight: 'bold',
							color: 'white',
						}}
					>
						Gửi
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default Feedback;
