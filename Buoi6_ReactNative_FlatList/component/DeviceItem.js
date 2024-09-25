import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	TextInput,
} from 'react-native';

export default function DeviceItem({ data }) {
	const { image, title, icon, price, discount } = data;
	return (
		<View
			style={{
				width: 150,
				alignItems: 'center',
				marginVertical: 10,
				borderColor: '#ccc',
				borderWidth: 1,
				borderRadius: 10,
				marginHorizontal: 10,
			}}
		>
			<Image
				source={image}
				style={{
					width: 140,
					height: 90,
				}}
			/>
			<View style={{ alignItems: 'flex-start', marginVertical: 8 }}>
				<Text style={{ marginVertical: 5 }}>{title}</Text>
				<Image source={icon} />
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '85%',
				}}
			>
				<Text style={{ fontWeight: 'bold' }}>{price}</Text>
				<Text style={{ color: '#ccc' }}>{discount}</Text>
			</View>
		</View>
	);
}
