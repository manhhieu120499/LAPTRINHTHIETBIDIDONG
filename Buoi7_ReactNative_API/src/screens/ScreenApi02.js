import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StatusBar,
	TextInput,
	FlatList,
} from 'react-native';
import Checkbox from 'expo-checkbox';

function ScreenApi02() {
	const BASE_URI =
		'https://665024f3ec9b4a4a6030e184.mockapi.io/api/v1/course/jobs';
	const [isChecked, setChecked] = useState(false);
	const [jobs, setJobs] = useState([]);

	const handleRenderJobs = () => {
		fetch(BASE_URI)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setJobs(data);
			});
	};

	useEffect(() => {
		handleRenderJobs();
	}, []);

	return (
		<View
			style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}
		>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Image source={require('../../assets/btnGoBack.png')} />
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={require('../../assets/user.png')}
						style={{ width: 50, height: 50, borderRadius: 25 }}
					/>
					<View style={{ marginLeft: 10 }}>
						<Text
							style={{
								color: 'rgba(23, 26, 31, 1)',
								fontSize: 20,
								fontWeight: 'bold',
								textAlign: 'center',
							}}
						>
							Hi Twinkle
						</Text>
						<Text
							style={{
								color: 'rgba(23, 26, 31, 1)',
								fontSize: 14,
							}}
						>
							Have agrate day a head
						</Text>
					</View>
				</View>
			</View>
			<View
				style={{
					flex: 1.5,
					alignItems: 'center',
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						width: '95%',
						height: 44,
						paddingHorizontal: 10,
						alignItems: 'center',
						borderWidth: 1,
						borderColor: 'rgba(144, 149, 160, 1)',
						borderRadius: 10,
						marginTop: 15,
					}}
				>
					<Image source={require('../../assets/search.png')} />
					<TextInput
						placeholder="Search"
						placeholderTextColor={'rgba(23, 26, 31, 1)'}
						style={{
							color: 'rgba(23, 26, 31, 1)',
							width: '90%',
							height: '100%',
							paddingHorizontal: 8,
						}}
					/>
				</View>
			</View>
			<View
				style={{
					flex: 5,
					alignItems: 'center',
				}}
			>
				<FlatList
					data={jobs}
					renderItem={({ item }) => (
						<View
							style={{
								width: '95%',
								height: 48,
								borderRadius: 24,
								backgroundColor: 'rgba(222, 225, 230, 0.47)',
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
								shadowColor: 'rgba(23, 26, 31, 0.15)',
								shadowOffset: { width: 0, height: 8 },
								elevation: 17,
								marginVertical: 10,
								alignSelf: 'center',
							}}
						>
							<Checkbox
								style={{ width: 15, height: 15 }}
								value={isChecked}
								onValueChange={setChecked}
							/>
							<Text style={{ width: '70%', paddingLeft: 15 }}>
								{item.job_title}
							</Text>
							<TouchableOpacity>
								<Image
									source={require('../../assets/edit.png')}
								/>
							</TouchableOpacity>
						</View>
					)}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					style={{ width: '100%' }}
				/>
			</View>
			<View style={{ flex: 2, alignItems: 'center', marginTop: 20 }}>
				<TouchableOpacity
					style={{ width: 69, height: 69, borderRadius: 33 }}
				>
					<Image
						source={require('../../assets/btn_add.png')}
						style={{ width: '100%', height: '100%' }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ScreenApi02;
