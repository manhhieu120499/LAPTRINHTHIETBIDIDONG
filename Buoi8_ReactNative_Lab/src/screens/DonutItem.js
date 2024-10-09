import React from 'react';
import { Pressable } from 'react-native';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

const avatarImage = {
	'donut_yellow1.png': require('../../assets/donut_yellow1.png'),
	'donut_red1.png': require('../../assets/donut_red1.png'),
	'tasty_donut1.png': require('../../assets/tasty_donut1.png'),
	'green_donut1.png': require('../../assets/green_donut1.png'),
};

export default function DonutItem({ data }) {
	const { cake_name, description, price, avatar } = data;

	return (
		<View
			style={{
				flexDirection: 'row',
				width: 337,
				height: 120,
				alignItems: 'center',
				justifyContent: 'space-between',
				backgroundColor: 'rgba(244, 221, 221, 1)',
				borderRadius: 10,
				marginVertical: 7,
				position: 'relative',
			}}
		>
			<Image
				source={avatarImage[avatar]}
				style={{ marginHorizontal: 10 }}
			/>
			<View style={{ width: '60%' }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
					{cake_name}
				</Text>
				<Text
					style={{
						fontSize: 15,
						color: 'rgba(0, 0, 0, 0.54)',
						marginVertical: 5,
					}}
				>
					{description}
				</Text>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							marginTop: 5,
						}}
					>
						${price}
					</Text>
					<Image
						source={require('../../assets/plus_button.png')}
						style={{ position: 'absolute', right: 0, bottom: -15 }}
					/>
				</View>
			</View>
		</View>
	);
}
