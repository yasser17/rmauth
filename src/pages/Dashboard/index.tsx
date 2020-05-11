import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAuth} from '../../contexts/auth';
import Logo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
	const {logout} = useAuth();
	return (
		<View style={styles.container}>
			<Image source={Logo} resizeMode="contain" />
			<Text style={styles.text}>You are logged!</Text>
			<TouchableOpacity style={styles.button} onPress={() => logout()}>
				<Text style={styles.buttonText}>Exit</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
	image: {width: '70%'},
	text: {fontSize: 18, marginTop: 20},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#fff',
	},
	button: {
		width: '80%',
		backgroundColor: '#6961D4',
		paddingVertical: 10,
		marginTop: 10,
	},
});
