import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	SafeAreaView,
} from 'react-native';

function ScreenApi01() {
	const BASE_URI =
		'https://665024f3ec9b4a4a6030e184.mockapi.io/api/v1/course/todos';
	const [todo, setToDo] = useState({
		id: '',
		createAt: '',
		name: '',
		description: '',
	});

	const [toDos, setToDos] = useState([]);

	const handleRenderToDos = () => {
		fetch(BASE_URI)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setToDos(data);
			});
	};

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
			} else {
				alert('Add Job Fail');
			}
		});
		handleRenderToDos();
	};

	const handleDeleteJob = (id) => {
		fetch(BASE_URI + '/' + id, {
			method: 'DELETE',
		}).then((res) => {
			if (res.status == 200) {
				alert('Delete job successful');
			} else {
				alert('Delete job fail');
			}
		});
		handleRenderToDos();
	};

	const handleEditJob = (job) => {
		fetch(BASE_URI + '/' + job.id, {
			method: 'PUT',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(job),
		}).then((res) => {
			if (res.status == 200) {
				alert('Edit job successful');
			} else {
				alert('Edit job fail' + res.status);
			}
		});
		handleRenderToDos();
	};

	useEffect(() => {
		handleRenderToDos();
	}, []);
	return (
		<SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
			<View style={{ flex: 0.5 }}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() =>
						handleAddJob({
							id: 15,
							createdAt: new Date().getTime,
							name: 'Clean the house',
							description: 'You have to clean the kitchen',
						})
					}
				>
					<Text style={styles.btn_text}>ADD</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 0.5 }}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() => handleDeleteJob(15)}
				>
					<Text style={styles.btn_text}>DELETE</Text>
				</TouchableOpacity>
			</View>
			<View style={{ flex: 0.5 }}>
				<TouchableOpacity
					style={styles.btn}
					onPress={() =>
						handleEditJob({
							id: 15,
							createdAt: new Date().getTime,
							name: 'Clean the house 123',
							description: 'You have to clean the kitchen',
						})
					}
				>
					<Text style={styles.btn_text}>EDIT</Text>
				</TouchableOpacity>
			</View>
			<Text style={{ fontSize: 20, fontWeight: 'bold' }}>List Job</Text>
			<View style={{ flex: 2, width: '100%', alignItems: 'center' }}>
				<FlatList
					data={toDos}
					renderItem={({ item }) => (
						<View
							style={{
								width: '100%',
								borderRadius: 10,
								borderWidth: 1,
								borderColor: '#ccc',
								marginVertical: 10,
								paddingVertical: 10,
							}}
						>
							<Text>NameJob: {item.name}</Text>
							<Text>Descritption: {item.description}</Text>
						</View>
					)}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	btn: {
		width: 400,
		height: 60,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'green',
	},
	btn_text: {
		color: 'white',
		fontSize: 20,
	},
});

export default ScreenApi01;
