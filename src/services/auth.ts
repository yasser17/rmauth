interface Response {
	token: string;
	user: {
		name: string;
		email: string;
	};
}

interface UserResponse {
	user: {
		name: string;
		email: string;
	};
}

export function signIn(): Promise<Response> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				token:
					'asdkfjasasdfasuidh2839as9df8yas89dfy98asyg89a98sduf89a89sdf',
				user: {
					name: 'Yasser Mussa',
					email: 'yasser.mussa@gmail.com',
				},
			});
		}, 2000);
	});
}

export function userData(): Promise<UserResponse> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				user: {
					name: 'Yasser Mussa',
					email: 'yasser.mussa@gmail.com',
				},
			});
		}, 2000);
	});
}
