import type { RequestHandler } from './__types';

export const GET: RequestHandler = async () => {
	const response = await fetch('http://api:3000/users', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		});

	if (response.status === 404) {
		return {
			body: {
				users: []
			}
		};
	}

	if (response.status === 200) {
		return {
			body: {
				users: await response.json()
			}
		};
	}

	return {
		status: response.status
	};
};