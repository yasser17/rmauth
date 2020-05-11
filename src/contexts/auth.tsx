import React, {useState, createContext, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {signIn, userData} from '../services/auth';
import api from '../services/api';

interface User {
	name: string;
	email: string;
}

interface AuthContextData {
	signed: Boolean;
	user: User | null;
	login(): Promise<void>;
	logout(): void;
	loading: boolean;
}

interface LoginUserData {
	username: string;
	password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadLocalData() {
			const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

			if (storagedToken) {
				try {
					const authUser = await userData();

					setUser(authUser.user);
					api.defaults.headers.Authorization = storagedToken;
				} catch (e) {
					if (e.response.status === 401) {
						await AsyncStorage.clear();
					}
				}
			}

			setLoading(false);
		}

		loadLocalData();
	}, []);

	async function login() {
		const authData = await signIn();

		setUser(authData.user);

		await AsyncStorage.setItem(
			'@RNAuth:user',
			JSON.stringify(authData.user),
		);
		await AsyncStorage.setItem('@RNAuth:token', authData.token);
		api.defaults.headers.Authorization = authData.token;

		setLoading(false);
	}

	async function logout() {
		await AsyncStorage.clear();
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{signed: !!user, user, loading, login, logout}}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	const context = useContext(AuthContext);

	return context;
}
