import React, { useEffect, useState } from 'react';
import { FlatList, Pressable } from 'react-native';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';
import DonutItem from './DonutItem';
import Screen2 from './Screen2';

const styles = StyleSheet.create({
	btn: {
		width: 100,
		height: 35,
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'rgba(0, 0, 0, 0.2)',
		borderWidth: 1,
	},
	textBtn: {
		fontSize: 14,
		color: 'rgba(12, 6, 6, 1)',
		fontWeight: 'bold',
	},
});

export default function Screen1(props) {
	const { navigation, route } = props;
	const { navigate, goBack } = navigation;
	const [active, setActive] = useState({
		donut: true,
		pink_donut: false,
		floating: false,
	});

	const [donut, setDonut] = useState([]);

	const BaseURL =
		'https://665024f3ec9b4a4a6030e184.mockapi.io/api/v1/course/donut';
	const getData = () => {
		fetch(BaseURL)
			.then((res) => res.json())
			.then((data) => setDonut(data));
	};

	const filterData = (condition) => {
		fetch(BaseURL)
			.then((res) => res.json())
			.then((data) =>
				setDonut(() => {
					return data.filter((cake) => cake.cake_name == condition);
				})
			);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<View
				style={{
					height: 100,
					justifyContent: 'center',
				}}
			>
				<Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.65)' }}>
					Welcome, Jala!
				</Text>
				<Text
					style={{ fontSize: 20, fontWeight: 'bold', marginTop: 8 }}
				>
					Choice you Best food
				</Text>
			</View>
			<View
				style={{
					height: 46,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<View
					style={{
						width: '80%',
						borderColor: 'rgba(196, 196, 196, 1)',
						borderWidth: 1,
						paddingHorizontal: 5,
					}}
				>
					<TextInput
						placeholder="Search food"
						placeholderTextColor={'#ccc'}
						style={{
							height: '100%',
							width: '100%',
							color: '#222',
						}}
					/>
				</View>
				<Image source={require('../../assets/Group18.png')} />
			</View>
			<View
				style={{
					height: 50,
					alignItems: 'center',
					justifyContent: 'space-between',
					flexDirection: 'row',
					marginVertical: 10,
				}}
			>
				<Pressable
					style={[
						styles.btn,
						{
							backgroundColor:
								active.donut == true
									? 'rgba(241, 176, 0, 1)'
									: null,
						},
					]}
					onPress={() => {
						setActive({
							donut: true,
							pink_donut: false,
							floating: false,
						});
						getData();
					}}
				>
					<Text style={styles.textBtn}>Donut</Text>
				</Pressable>
				<Pressable
					style={[
						styles.btn,
						{
							backgroundColor:
								active.pink_donut == true
									? 'rgba(241, 176, 0, 1)'
									: null,
						},
					]}
					onPress={() => {
						setActive({
							donut: false,
							pink_donut: true,
							floating: false,
						});
						filterData('Pink Donut');
					}}
				>
					<Text style={styles.textBtn}>Pink Donut</Text>
				</Pressable>
				<Pressable
					style={[
						styles.btn,
						{
							backgroundColor:
								active.floating == true
									? 'rgba(241, 176, 0, 1)'
									: null,
						},
					]}
					onPress={() => {
						setActive({
							donut: false,
							pink_donut: false,
							floating: true,
						});
						filterData('Floating Donut');
					}}
				>
					<Text style={styles.textBtn}>Floating</Text>
				</Pressable>
			</View>
			<View style={{ flex: 4 }}>
				{donut.length > 0 && (
					<FlatList
						data={donut}
						renderItem={({ item }) => (
							<DonutItem data={item} navigate={navigate} />
						)}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
					/>
				)}
			</View>
		</View>
	);
}
