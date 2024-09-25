import { StatusBar } from 'react-native';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	TouchableOpacity,
	FlatList,
	Platform,
} from 'react-native';
import FoodItem from '../component/FoodItem';
const data = [
	{
		image: require('../assets/img/ca_nau_lau.png'),
		title: 'Ca nấu lẩu, nấu mì mini',
		shopName: 'Devang',
	},
	{
		image: require('../assets/img/ga_bo_toi.png'),
		title: '1 KG KHÔ GÀ BƠ TỎI',
		shopName: 'LTD Food',
	},
	{
		image: require('../assets/img/xa_can_cau.png'),
		title: 'Xe cần cẩu đa năng',
		shopName: 'Thế giới đồ chơi',
	},
	{
		image: require('../assets/img/do_choi_dang_mo_hinh.png'),
		title: 'Đồ chơi dạng mô hình',
		shopName: 'Thế giới đồ chơi',
	},
	{
		image: require('../assets/img/lanh_dao_gian_don.png'),
		title: 'Lãnh đạo đơn giản',
		shopName: 'Minh Long Book',
	},
	{
		image: require('../assets/img/trump1.png'),
		title: 'Donald Trump Thiên tài lãnh đạo',
		shopName: 'Minh Long Book',
	},
];

export default function Screen1() {
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
				<Text style={{ fontSize: 18, color: 'white' }}>Chat</Text>
				<Image source={require('../assets/img/bi_cart-check.png')} />
			</View>
			<View
				style={{
					height: 80,
					alignItems: 'center',
					justifyContent: 'center',
					paddingHorizontal: 25,
					backgroundColor: '#d9d9d9',
				}}
			>
				<Text style={{ fontSize: 16 }}>
					Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với
					shop!
				</Text>
			</View>

			<FlatList
				data={data}
				renderItem={({ item }) => <FoodItem data={item} />}
				keyExtractor={(item) => item.title}
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
