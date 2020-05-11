import React, {useState} from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Text,
	Image,
} from 'react-native';
import {useAuth} from '../../contexts/auth';
import Logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
	const {login} = useAuth();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	function handleSignIn() {
		login();
	}

	return (
		<View style={styles.container}>
			<Image source={Logo} style={styles.logo} resizeMode="contain" />
			<View style={styles.formContainer}>
				<Text style={styles.text}>User</Text>
				<TextInput
					style={styles.formControl}
					autoCapitalize="none"
					autoCorrect={false}
					autoCompleteType="email"
					keyboardType="email-address"
					onChangeText={setUsername}
				/>

				<Text style={styles.text}>Password</Text>
				<TextInput
					style={styles.formControl}
					autoCapitalize="none"
					autoCorrect={false}
					autoCompleteType="password"
					secureTextEntry={true}
					onChangeText={setPassword}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={handleSignIn}>
				<Text style={styles.buttonText}>Login</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SignIn;

const styles = StyleSheet.create({
	container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
	formContainer: {width: '90%'},
	text: {fontSize: 18},
	buttonText: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#fff',
	},
	formControl: {
		marginTop: 5,
		marginBottom: 10,
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#a0aec0',
		width: '100%',
		paddingVertical: 8,
		paddingHorizontal: 5,
		fontSize: 18,
	},
	logo: {width: '50%'},
	button: {
		width: '80%',
		backgroundColor: '#6961D4',
		paddingVertical: 10,
	},
});
