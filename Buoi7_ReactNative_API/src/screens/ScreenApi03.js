import React, { useState } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StatusBar,
	TextInput,
} from 'react-native';

function ScreenApi03(props) {
	const BASE_URI =
		'https://665024f3ec9b4a4a6030e184.mockapi.io/api/v1/course/jobs';
	const { navigate, goBack } = props.navigation;
	const [job, setJob] = useState({
		id: '',
		job_title: '',
	});

	const handleAddJob = (job) => {
		fetch(BASE_URI, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(job),
		}).then((res) => {
			if (res.status == 201) {
				alert('Add Job Successful');
				navigate('ScreenApi02', {
					name: props.route.params.name,
				});
			}
			return res;
		});
	};
	return (
		<View
			style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 15 }}
		>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 1,
					flexDirection: 'row-reverse',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					onPress={() =>
						navigate('ScreenApi02', {
							name: props.route.params.name,
						})
					}
				>
					<Image source={require('../../assets/btnGoBack.png')} />
				</TouchableOpacity>
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
							{props.route.params.name || 'Hi Twinkle'}
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
					justifyContent: 'center',
				}}
			>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>
					ADD YOUR JOB
				</Text>
			</View>
			<View style={{ flex: 1.5 }}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 10,
						height: 44,
						borderColor: 'rgba(144, 149, 160, 1)',
						borderWidth: 1,
					}}
				>
					<Image source={require('../../assets/Frame.png')} />
					<TextInput
						placeholder="input your job"
						placeholderTextColor={'black'}
						style={{
							width: '90%',
							height: '100%',
							paddingLeft: 10,
						}}
						value={job.job_title}
						onChangeText={(text) =>
							setJob({
								...job,
								job_title: text,
							})
						}
					/>
				</View>
			</View>
			<View style={{ flex: 2, alignItems: 'center' }}>
				<TouchableOpacity
					style={{
						backgroundColor: 'rgba(0, 189, 214, 1)',
						width: 190,
						height: 44,
						borderRadius: 12,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onPress={async () => {
						const res = await handleAddJob({
							...job,
							id: Math.floor(Math.random() * 100),
						});
					}}
				>
					<Text style={{ fontSize: 16, color: 'white' }}>
						FINISH -{`>`}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 4, alignItems: 'center' }}>
				<Image source={require('../../assets/note.png')} />
			</View>
		</View>
	);
}

export default ScreenApi03;
