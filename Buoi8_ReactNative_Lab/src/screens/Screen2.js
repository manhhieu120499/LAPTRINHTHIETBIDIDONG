import React, { useEffect, useState } from 'react';
import {
	View,
	TextInput,
	Image,
	Pressable,
	Text,
	StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
	btn: {
		width: 25,
		height: 25,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(241, 176, 0, 1)',
	},
	textBtn: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold',
		lineHeight: 25,
	},
});

const avatarImage = {
	'donut_yellow1.png': require('../../assets/donut_yellow1.png'),
	'donut_red1.png': require('../../assets/donut_red1.png'),
	'tasty_donut1.png': require('../../assets/tasty_donut1.png'),
	'green_donut1.png': require('../../assets/green_donut1.png'),
};

export default function Screen2(props) {
	const dataDonut = props.route.params.infoDonut;
	const [count, setCount] = useState(0);
	const handleIncrease = () => {
		setCount((pre) => pre + 1);
	};
	const handleDecrease = () => {
		setCount((pre) => pre - 1);
	};
	useEffect(() => console.log(dataDonut));
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					flex: 5,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image source={avatarImage[dataDonut.avatar]} />
			</View>
			<View style={{ flex: 5, paddingHorizontal: 10 }}>
				<View style={{ height: 80 }}>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						{dataDonut.cake_name}
					</Text>
					<View
						style={{
							width: '100%',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 8,
						}}
					>
						<Text
							style={{
								fontSize: 15,
								color: 'rgba(0, 0, 0, 0.54)',
							}}
						>
							{dataDonut.description}
						</Text>
						<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
							${dataDonut.price}
						</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						marginTop: 10,
						marginBottom: 10,
					}}
				>
					<View
						style={{
							width: 120,
							alignItems: 'flex-start',
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								width: '100%',
								justifyContent: 'space-between',
							}}
						>
							<Image
								source={require('../../assets/Vector.png')}
							/>
							<Text
								style={{
									fontSize: 15,
									color: 'rgba(0, 0, 0, 0.54)',
									width: '90%',
									textAlign: 'center',
								}}
							>
								Delivery in
							</Text>
						</View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								marginTop: 5,
								alignSelf: 'center',
							}}
						>
							30 min
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							width: 80,
							justifyContent: 'space-between',
						}}
					>
						<Pressable
							style={styles.btn}
							onPress={() => handleDecrease()}
						>
							<Text style={styles.textBtn}>-</Text>
						</Pressable>
						<Text style={{ fontSize: 18, fontWeight: 'bold' }}>
							{count != 0 ? count : ''}
						</Text>
						<Pressable
							style={styles.btn}
							onPress={() => handleIncrease()}
						>
							<Text style={styles.textBtn}>+</Text>
						</Pressable>
					</View>
				</View>
				<View style={{ width: '100%', marginVertical: 10 }}>
					<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
						Restaurants info
					</Text>
					<Text
						style={{
							fontSize: 15,
							marginTop: 8,
							color: 'rgba(0, 0, 0, 0.67)',
						}}
					>
						Order a Large Pizza but the size is the equivalent of a
						medium/small from other places at the same price range.
					</Text>
				</View>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						marginTop: 10,
					}}
				>
					<Pressable
						style={{
							width: 316,
							height: 58,
							backgroundColor: 'rgba(241, 176, 0, 1)',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 5,
						}}
						onPress={() => alert('Add Donut Successful')}
					>
						<Text
							style={{
								fontSize: 25,
								fontWeight: 'bold',
								color: 'white',
							}}
						>
							Add to cart
						</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}
