import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {useAuth, AuthProvider} from '../contexts/auth';

const styles = StyleSheet.create({
	container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const Routes: React.FC = () => {
	const {loading, signed} = useAuth();

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
