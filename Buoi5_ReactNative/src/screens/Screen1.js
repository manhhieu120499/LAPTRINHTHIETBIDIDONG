import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';

export default function Screen1(props) {
	const { navigate, goBack } = props.navigation;
	const phoneItem =
		props.route.params != null ? { ...props.route.params } : null;

	return (
		<View style={{ flex: 100 }}>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 60,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{phoneItem != null ? (
					<Image
						source={phoneItem.img}
						style={{ width: 265, height: 324 }}
					/>
				) : (
					<Image source={require('../../assets/vs_blue.png')} />
				)}
			</View>
			<View style={{ flex: 45, alignItems: 'center' }}>
				<View style={{ width: '90%' }}>
					<View style={{ width: '100%' }}>
						<Text style={{ fontSize: 15 }}>
							Điện Thoại Vsmart Joy 3 - Hàng chính hãng
						</Text>
						<View
							style={{
								width: '90%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								marginVertical: 10,
							}}
						>
							<View style={{ flexDirection: 'row' }}>
								<Image
									source={require('../../assets/star.png')}
								/>
								<Image
									source={require('../../assets/star.png')}
								/>
								<Image
									source={require('../../assets/star.png')}
								/>
								<Image
									source={require('../../assets/star.png')}
								/>
								<Image
									source={require('../../assets/star.png')}
								/>
							</View>
							<Text style={{ fontSize: 15 }}>
								(Xem 828 đánh giá)
							</Text>
						</View>
					</View>
					<View
						style={{
							width: '100%',
							marginBottom: 10,
						}}
					>
						<View
							style={{
								width: '80%',
								flexDirection: 'row',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 18,
									fontWeight: 'bold',
									color: 'black',
								}}
							>
								1.790.000 đ
							</Text>
							<Text
								style={{
									fontSize: 18,
									fontWeight: 'bold',
									color: 'rgba(0, 0, 0, 0.58)',
									textDecorationLine: 'line-through',
									textDecorationColor: 'black',
								}}
							>
								1.790.000 đ
							</Text>
						</View>
						<View
							style={{
								width: '100%',
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 12,
									fontWeight: 'bold',
									color: 'red',
									marginVertical: 10,
									marginRight: 10,
								}}
							>
								Ở ĐÂU RẺ HƠN HOÀN TIỀN
							</Text>
							<Image
								source={require('../../assets/Group1.png')}
							/>
						</View>
					</View>
					<View style={{ width: '100%' }}>
						<TouchableOpacity
							style={{
								width: '100%',
								height: 40,
								backgroundColor: 'white',
								borderWidth: 1,
								borderColor: 'rgba(0, 0, 0, 0.46)',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 10,
							}}
							onPress={() =>
								navigate('Screen2', {
									img: require('../../assets/vs_blue1.png'),
									title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
								})
							}
						>
							<Text style={{ width: '90%', textAlign: 'center' }}>
								4 MÀU - CHỌN MÀU
							</Text>
							<Image
								source={require('../../assets/Vector.png')}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								width: '100%',
								height: 50,
								backgroundColor: 'red',
								alignItems: 'center',
								justifyContent: 'center',
								marginTop: 40,
								borderRadius: 10,
							}}
						>
							<Text
								style={{
									fontSize: 20,
									color: 'white',
									fontWeight: 'bold',
								}}
							>
								CHỌN MUA
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}
