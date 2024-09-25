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
	Platform,
} from 'react-native';
import { StatusBar } from 'react-native';
import DeviceItem from '../component/DeviceItem';

const data = [
	{
		image: require('../assets/img/giacchuyen1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',
		icon: require('../assets/img/Group4.png'),
		price: '69.000đ',
		discount: '-39%',
	},
	{
		image: require('../assets/img/daynguon1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',
		icon: require('../assets/img/Group4.png'),
		price: '69.000đ',
		discount: '-39%',
	},
	{
		image: require('../assets/img/dauchuyendoipsps21.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',
		icon: require('../assets/img/Group4.png'),
		price: '69.000đ',
		discount: '-39%',
	},
	{
		image: require('../assets/img/dauchuyendoi1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',
		icon: require('../assets/img/Group4.png'),
		price: '69.000đ',
		discount: '-39%',
	},
	{
		image: require('../assets/img/carbusbtops21.png'),
		title: 'Cách chuyển từ cổng USB sang PS2...',
		icon: require('../assets/img/Group4.png'),
		price: '69.000đ',
		discount: '-39%',
	},

	{
		image: require('../assets/img/daucam1.png'),
		title: 'Cách chuyển từ cổng USB sang PS2',
		icon: require('../assets/img/Group4.png'),
		price: '69.000đ',
		discount: '-39%',
	},
];

export default function Screen2() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View
				style={{
					height: 42,
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
					backgroundColor: 'rgba(27, 169, 255, 1)',
					paddingHorizontal: 15,
				}}
			>
				<Image
					source={require('../assets/img/ant-design_arrow-left-outlined.png')}
				/>
				<View
					style={{
						flexDirection: 'row',
						backgroundColor: 'white',
						width: 200,
						padding: 5,
					}}
				>
					<Image source={require('../assets/img/search.png')} />
					<TextInput
						value="Dây cáp usb"
						style={{ width: '80%', paddingLeft: 8 }}
					/>
				</View>
				<View style={{ position: 'relative' }}>
					<Image
						source={require('../assets/img/bi_cart-check.png')}
					/>
					<View
						style={{
							backgroundColor: 'red',
							width: 10,
							height: 10,
							borderRadius: 5,
							position: 'absolute',
							right: 0,
						}}
					/>
				</View>
				<View>
					<Image source={require('../assets/img/Group2.png')} />
				</View>
			</View>

			<FlatList
				data={data}
				renderItem={({ item }) => <DeviceItem data={item} />}
				keyExtractor={(item) => item.image}
				numColumns={2}
				style={{ alignSelf: 'center' }}
			/>
			<View
				style={{
					height: Platform.OS == 'ios' ? 70 : 50,
					backgroundColor: 'rgba(27, 169, 255, 1)',
					position: 'absolute',
					bottom: 0,
					left: 0,
					right: 0,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 15,
				}}
			>
				<Image source={require('../assets/img/Group10.png')} />
				<Image source={require('../assets/img/Vector.png')} />
				<Image source={require('../assets/img/Vector1.png')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		position: 'relative',
	},
});
