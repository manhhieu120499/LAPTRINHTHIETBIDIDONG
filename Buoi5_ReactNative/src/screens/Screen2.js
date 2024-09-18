import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	StatusBar,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

const styles = StyleSheet.create({
	btn: {
		width: 80,
		height: 80,
		marginVertical: 8,
	},
});

const data = {
	blueSea: {
		img: require('../../assets/vs_silver.png'),
		title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'xanh biển',
		product: 'Tiki Trading',
		price: '1.790.000 đ',
	},
	red: {
		img: require('../../assets/vs_red_b.png'),
		title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'đỏ',
		product: 'Tiki Trading',
		price: '1.790.000 đ',
	},
	black: {
		img: require('../../assets/vs_black.png'),
		title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'đen',
		product: 'Tiki Trading',
		price: '1.790.000 đ',
	},
	blue: {
		img: require('../../assets/vs_blue1.png'),
		title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng',
		color: 'xanh',
		product: 'Tiki Trading',
		price: '1.790.000 đ',
	},
};

export default function Screen2(props) {
	const { navigate, goBack } = props.navigation;
	const { img, title } = props.route.params;
	const [name, setName] = useState({
		img: img,
		title: title,
	});
	const phoneItem = {
		...name,
	};

	return (
		<View style={{ flex: 100 }}>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 20,
					flexDirection: 'row',
					width: '100%',
					padding: 10,
				}}
			>
				<Image source={name.img} style={{ width: 112, height: 132 }} />
				<View style={{ width: '50%', marginLeft: 20 }}>
					<Text
						style={{
							width: '100%',
							flexWrap: 'wrap',

							marginTop: 10,
							fontSize: 15,
						}}
					>
						{name.title}
					</Text>
					{name.price && (
						<Text style={{ marginTop: 5 }}>
							Màu:{' '}
							<Text style={{ fontWeight: 'bold' }}>
								{name.color}
							</Text>
						</Text>
					)}
					{name.product && (
						<Text style={{ marginTop: 5 }}>
							Cung cấp bởi:{' '}
							<Text style={{ fontWeight: 'bold' }}>
								{name.product}
							</Text>
						</Text>
					)}
					{name.price && (
						<Text style={{ marginTop: 5, fontWeight: 'bold' }}>
							{name.price}
						</Text>
					)}
				</View>
			</View>
			<View
				style={{
					flex: 80,
					backgroundColor: 'rgba(196, 196, 196, 1)',
					paddingHorizontal: 15,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
					style={{
						fontSize: 18,
						color: 'black',
						alignSelf: 'flex-start',
						marginVertical: 10,
					}}
				>
					Chọn một màu bên dưới:
				</Text>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
					}}
				>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor: 'rgba(197, 241, 251, 1)',
							},
						]}
						onPress={() => {
							setName(data.blueSea);
						}}
					/>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor: 'rgba(243, 13, 13, 1)',
							},
						]}
						onPress={() => {
							setName(data.red);
						}}
					/>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor: 'black',
							},
						]}
						onPress={() => {
							setName(data.black);
						}}
					/>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor: 'rgba(35, 72, 150, 1)',
							},
						]}
						onPress={() => {
							setName(data.blue);
						}}
					/>
				</View>
				<View style={{ width: '100%', marginTop: 10 }}>
					<TouchableOpacity
						style={{
							width: '100%',
							height: 50,
							backgroundColor: 'rgba(25, 82, 226, 0.58)',
							borderRadius: 10,
							alignItems: 'center',
							justifyContent: 'center',
							borderColor: 'rgba(202, 21, 54, 1)',
							borderWidth: 1,
						}}
						onPress={() => {
							props.navigation.dispatch(
								CommonActions.reset({
									index: 0,
									routes: [
										{ name: 'Screen1', params: phoneItem },
									],
								})
							);
						}}
					>
						<Text style={{ fontSize: 20, color: 'white' }}>
							XONG
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
