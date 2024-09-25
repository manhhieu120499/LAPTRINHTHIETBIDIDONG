import { Text, View, Image, TouchableOpacity } from 'react-native';

function FoodItem({ data }) {
	const { image, title, shopName } = data;
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingHorizontal: 20,
				borderBottomColor: 'rgba(196, 196, 196, 1)',
				borderBottomWidth: 1,
				height: 80,
			}}
		>
			<View
				style={{
					width: '25%',
					alignItems: 'center',
				}}
			>
				<Image source={image} />
			</View>

			<View style={{ width: '50%' }}>
				<Text style={{ marginBottom: 5, width: '100%' }}>{title}</Text>
				<View style={{ flexDirection: 'row' }}>
					<Text style={{ color: 'red' }}>Shop: </Text>
					<Text>{shopName}</Text>
				</View>
			</View>
			<TouchableOpacity
				style={{
					backgroundColor: 'red',
					width: 88,
					height: 38,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text style={{ color: 'white', fontSize: 18 }}>Chat</Text>
			</TouchableOpacity>
		</View>
	);
}

export default FoodItem;
