import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

function Password(props) {
	const [condition, setCondition] = useState({
		length: 0,
		lowerCaseLetter: false,
		upperCaseLetter: false,
		number: false,
		specialSymbol: false,
	});
	const [output, setOutput] = useState('');
	const generatePass = () => {
		let pass = '';
		let strUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		let strLow = 'abcdefghijklmnopqrstuvwxyz';
		let strNumber = '0123456789';
		let strSpecialSymbol = '@#$';
		let str = strUp + strLow + strNumber + strSpecialSymbol;

		for (let i = 1; i <= condition.length; i++) {
			if (
				condition.lowerCaseLetter &&
				condition.upperCaseLetter &&
				condition.number &&
				condition.specialSymbol
			) {
				let char = Math.floor(Math.random() * str.length + 1);
				pass += str.charAt(char);
				continue;
			}
			if (
				condition.lowerCaseLetter &&
				condition.upperCaseLetter &&
				condition.number
			) {
				let char = Math.floor(
					Math.random() * (strLow + strUp + strNumber).length + 1
				);
				pass += (strLow + strUp + strNumber).charAt(char);
				continue;
			}
			if (
				condition.lowerCaseLetter &&
				condition.specialSymbol &&
				condition.number
			) {
				let char = Math.floor(
					Math.random() *
						(strLow + strSpecialSymbol + strNumber).length +
						1
				);
				pass += (strLow + strSpecialSymbol + strNumber).charAt(char);
				continue;
			}
			if (
				condition.specialSymbol &&
				condition.upperCaseLetter &&
				condition.number
			) {
				let char = Math.floor(
					Math.random() *
						(strSpecialSymbol + strUp + strNumber).length +
						1
				);
				pass += (strSpecialSymbol + strUp + strNumber).charAt(char);
				continue;
			}
			if (condition.lowerCaseLetter && condition.upperCaseLetter) {
				let char = Math.floor(
					Math.random() * (strLow + strUp).length + 1
				);
				pass += (strLow + strUp).charAt(char);
				continue;
			}
			if (condition.lowerCaseLetter && condition.number) {
				let char = Math.floor(
					Math.random() * (strLow + strNumber).length + 1
				);
				pass += (strLow + strNumber).charAt(char);
			}
			if (condition.specialSymbol && condition.lowerCaseLetter) {
				let char = Math.floor(
					Math.random() * (strSpecialSymbol + strLow).length + 1
				);
				pass += (strSpecialSymbol + strLow).charAt(char);
				continue;
			}
			if (condition.upperCaseLetter && condition.number) {
				let char = Math.floor(
					Math.random() * (strNumber + strUp).length + 1
				);
				pass += (strNumber + strUp).charAt(char);
				continue;
			}
			if (condition.upperCaseLetter && condition.specialSymbol) {
				let char = Math.floor(
					Math.random() * (strSpecialSymbol + strUp).length + 1
				);
				pass += (strSpecialSymbol + strUp).charAt(char);
				continue;
			}
			if (condition.number && condition.specialSymbol) {
				let char = Math.floor(
					Math.random() * (strSpecialSymbol + strNumber).length + 1
				);
				pass += (strSpecialSymbol + strNumber).charAt(char);
				continue;
			}
		}
		return pass;
	};

	const checkCondition = () => {
		let count = 0;
		Object.keys(condition).forEach((key) => {
			if (condition[key] && typeof condition[key] === 'boolean') count++;
		});
		return count;
	};

	return (
		<LinearGradient
			colors={['#3B3B98', '#C4C4C400']}
			style={{ flex: 100, paddingHorizontal: 20, paddingVertical: 30 }}
		>
			<View
				style={{
					flex: 100,
					backgroundColor: '#23235B',
					borderRadius: 15,
				}}
			>
				<View style={{ flex: 20, justifyContent: 'center' }}>
					<Text
						style={{
							fontSize: 25,
							textAlign: 'center',
							color: 'white',
						}}
					>
						PASSWORD{'\n'}GENERATOR
					</Text>
				</View>
				<View
					style={{
						flex: 10,
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<TextInput
						style={{
							backgroundColor: '#151537',
							width: '90%',
							height: 45,
							color: 'white',
							fontSize: 18,
						}}
						value={output}
					/>
				</View>
				<View
					style={{
						flex: 70,
						alignSelf: 'center',
						width: '90%',
					}}
				>
					<View
						style={{
							flex: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',

							alignSelf: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							Password length
						</Text>
						<TextInput
							style={{
								width: 100,
								height: 40,
								backgroundColor: 'white',
								textAlign: 'center',
								fontSize: 20,
							}}
							value={condition.length > 0 ? condition.length : ''}
							onChangeText={(text) =>
								setCondition((prev) => {
									return {
										...prev,
										length: parseInt(text),
									};
								})
							}
						/>
					</View>
					<View
						style={{
							flex: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',

							alignSelf: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							Include lower case letters
						</Text>
						<Checkbox
							style={{
								width: 25,
								height: 25,
								backgroundColor: 'white',
							}}
							value={condition.lowerCaseLetter}
							onValueChange={() =>
								setCondition((prev) => {
									return {
										...prev,
										lowerCaseLetter: !prev.lowerCaseLetter,
									};
								})
							}
						/>
					</View>
					<View
						style={{
							flex: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',
							alignSelf: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							Include upcase letters
						</Text>
						<Checkbox
							style={{
								width: 25,
								height: 25,
								backgroundColor: 'white',
							}}
							value={condition.upperCaseLetter}
							onValueChange={() =>
								setCondition((prev) => {
									return {
										...prev,
										upperCaseLetter: !prev.upperCaseLetter,
									};
								})
							}
						/>
					</View>
					<View
						style={{
							flex: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',
							alignSelf: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							Include number
						</Text>
						<Checkbox
							style={{
								width: 25,
								height: 25,
								backgroundColor: 'white',
							}}
							value={condition.number}
							onValueChange={() =>
								setCondition((prev) => {
									return {
										...prev,
										number: !prev.number,
									};
								})
							}
						/>
					</View>
					<View
						style={{
							flex: 16,
							flexDirection: 'row',
							justifyContent: 'space-between',
							width: '100%',
							alignSelf: 'center',
							alignItems: 'center',
						}}
					>
						<Text style={{ color: 'white', fontSize: 20 }}>
							Include special symbol
						</Text>
						<Checkbox
							style={{
								width: 25,
								height: 25,
								backgroundColor: 'white',
							}}
							value={condition.specialSymbol}
							onValueChange={() =>
								setCondition((prev) => {
									return {
										...prev,
										specialSymbol: !prev.specialSymbol,
									};
								})
							}
						/>
					</View>
					<View
						style={{
							flex: 20,
							width: '100%',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<TouchableOpacity
							style={{
								height: 55,
								borderWidth: 1,
								width: '85%',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#3B3B98',
							}}
							onPress={() => {
								if (checkCondition() >= 2)
									setOutput(generatePass());
								else
									alert('Please select at least 2 condition');
							}}
						>
							<Text
								style={{
									fontWeight: 'bold',
									fontSize: 18,
									color: 'white',
								}}
							>
								GENERATE PASSWORD{' '}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</LinearGradient>
	);
}

export default Password;
