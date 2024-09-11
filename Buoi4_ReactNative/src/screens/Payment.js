import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Payment(props) {
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);
	return (
		<View style={{ flex: 100 }}>
			<View
				style={{
					flex: 25,
					marginTop: 20,
					padding: 10,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View>
					<Image source={require('../../assets/img/book.png')} />
					<Text
						style={{
							fontSize: 12,
							marginTop: 15,
							fontWeight: 'bold',
						}}
					>
						Mã giảm giá đã lưu
					</Text>
				</View>
				<View>
					<Text style={{ fontWeight: 'bold' }}>
						Nguyên hàm phân tích và ứng dụng
					</Text>
					<Text style={{ marginVertical: 8, fontWeight: 'bold' }}>
						Cung cấp bởi Tiki Trading
					</Text>
					<Text
						style={{
							marginBottom: 2,
							color: 'red',
							fontWeight: 'bold',
							fontSize: 18,
						}}
					>
						148.800 đ
					</Text>
					<Text
						style={{
							marginBottom: 8,
							color: '#C4C4C4',
							textDecorationLine: 'line-through',
							fontWeight: 'bold',
						}}
					>
						141.800 đ
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginBottom: 15,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								width: 70,
								height: 20,
								justifyContent: 'space-between',
							}}
						>
							<TouchableOpacity
								style={styles.btnAmount}
								onPress={() => {
									setTotal((prev) => {
										setAmount((prevAmount) => {
											if (prevAmount == 0) return 0;
											else return prevAmount - 1;
										});
										if (amount > 0) return prev - 148.8;
										else return 0;
									});
								}}
							>
								<Text style={styles.textBtnAmount}>-</Text>
							</TouchableOpacity>
							<Text
								style={{
									fontSize: 17,
									lineHeight: 20,
									fontWeight: 'bold',
								}}
							>
								{amount}
							</Text>
							<TouchableOpacity
								style={styles.btnAmount}
								onPress={() => {
									setTotal((prev) => {
										setAmount(amount + 1);
										return prev + 148.8;
									});
								}}
							>
								<Text style={styles.textBtnAmount}>+</Text>
							</TouchableOpacity>
						</View>
						<Text style={{ color: '#134FEC' }}>Mua sau</Text>
					</View>
					<Text style={{ fontSize: 12, color: '#134FEC' }}>
						Xem lại sau
					</Text>
				</View>
			</View>
			<View
				style={{
					flex: 15,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingHorizontal: 10,
				}}
			>
				<View
					style={{
						borderColor: 'black',
						borderWidth: 1,
						width: 200,
						height: 40,
						alignItems: 'center',
						justifyContent: 'space-around',
						flexDirection: 'row',
						borderRadius: 5,
					}}
				>
					<View
						style={{
							backgroundColor: 'yellow',
							width: 40,
							height: 20,
						}}
					></View>
					<Text style={{ fontSize: 18, fontWeight: 'bold' }}>
						Mã giảm giá
					</Text>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: '#0A5EB7',
						width: 100,
						height: 40,
						alignItems: 'center',
						justifyContent: 'center',
						borderRadius: 5,
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 18,
							fontWeight: 'bold',
						}}
					>
						Áp dụng
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 2, backgroundColor: '#C4C4C4' }}></View>
			<View
				style={{
					flex: 10,
					backgroundColor: 'white',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
					paddingHorizontal: 10,
				}}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 13 }}>
					Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
				</Text>
				<Text
					style={{
						color: '#134FEC',
						fontSize: 13,
						fontWeight: 'bold',
					}}
				>
					Nhập tại đây?
				</Text>
			</View>
			<View style={{ flex: 2, backgroundColor: '#C4C4C4' }}></View>
			<View
				style={{
					flex: 10,
					backgroundColor: 'white',
					flexDirection: 'row',
					paddingHorizontal: 15,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Text style={{ fontWeight: 'bold', fontSize: 18 }}>
					Tạm tính
				</Text>
				<Text
					style={{ fontWeight: 'bold', fontSize: 18, color: 'red' }}
				>
					{total.toFixed(3)} đ
				</Text>
			</View>
			<View style={{ flex: 16, backgroundColor: '#C4C4C4' }}></View>
			<View style={{ flex: 20, backgroundColor: 'white' }}>
				<View
					style={{
						flex: 40,
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingHorizontal: 15,
						alignItems: 'center',
					}}
				>
					<Text
						style={{
							fontSize: 18,
							color: '#808080',
							fontWeight: 'bold',
						}}
					>
						Thành tiền
					</Text>
					<Text
						style={{
							fontSize: 18,
							color: 'red',
							fontWeight: 'bold',
						}}
					>
						{total.toFixed(3)} đ
					</Text>
				</View>
				<View
					style={{
						flex: 60,
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
					}}
				>
					<TouchableOpacity
						style={{
							width: '90%',
							borderWidth: 1,
							borderRadius: 10,
							height: 40,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: 'red',
							borderColor: 'transparent',
						}}
					>
						<Text
							style={{
								fontSize: 20,
								color: 'white',
								fontWeight: 'bold',
							}}
							onPress={() => {
								if (amount != 0) {
									alert('Đặt hàng thành công');
									setAmount(0);
									setTotal(0);
								} else alert('Vui lòng chọn số lượng món hàng');
							}}
						>
							TIẾN HÀNH ĐẶT HÀNG
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	btnAmount: {
		width: 20,
		height: 20,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#C4C4C4',
	},
	textBtnAmount: {
		fontSize: 20,
		lineHeight: 20,
	},
});

export default Payment;
