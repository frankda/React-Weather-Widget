interface IResponse extends Response {
    message ?: string
}

// handle api errors
class ApiError extends Error {
    response: string | undefined;

	constructor(response: string | undefined) {
		super(response);
		this.name = 'ApiError';
		this.response = response;
	}
}

// fetch data from api
const loadJson = async (url: string) => {
	const response: IResponse = await fetch(url);
	if (response.status === 200) {
		return response.json();
	}
	throw new ApiError(response.message);
}

// function to handle timeout when fetching articles, default is 5s
const timeout = (delay: number, promise: Promise<Response>) => {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			reject(new ApiError('TIMEOUT'));
		}, delay);

		promise
			.then((value) => {
				clearTimeout(timer);
				resolve(value);
			})
			.catch((reason) => {
				clearTimeout(timer);
				reject(reason);
			});
	});
}

export default loadJson