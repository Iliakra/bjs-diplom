

class Profile {
	constructor (username, name, password) {
		this.username = username;
		this.name = name;
		this.firstName = name.firstName;
		this.lastName = name.lastName;
		this.password = password;
	}	

	createUser({username, firstName, lastName, password} , callback) {
        return ApiConnector.createUser({username, firstName, lastName, password}, (err, data) => {
        console.log(`Creating user: ${this.firstName}`);
        callback(err, data);
        });
	}

	perfomLogin({username, password}, callback) {
		return ApiConnector.perfomLogin({username, password}, (err, data) => {
        console.log(`Authorizing user: ${this.username}`);
        callback(err, data);
        });
	}

	addMoney({ currency, amount }, callback) {
		return ApiConnector.addMoney({ currency, amount }, (err, data) => {
        console.log(`Adding ${amount} of ${currency} to ${this.userame}`);
        callback(err, data);
        });
	}

	convertMoney({ fromCurrency, targetCurrency, targetAmount }, callback) {
		return ApiConnector.convertMoney({ fromCurrency, targetCurrency, targetAmount }, (err, data) => {
        console.log(`Converting ${fromCurrency} to ${targetAmount} ${targetCurrency}`);
        callback(err, data);
    	});
	}

	transferMoney({ to, amount }, callback) {
    	return ApiConnector.transferMoney({ to, amount }, (err, data) => {
        console.log(`Transfering ${amount} of Netcoins to ${to}`);
        callback(err, data);
    	});
	}
}

function getStocks (callback) {
	let curse = ApiConnector.getStocks();
	return curse
}

console.log(getStocks());

function main() {
	const Ivan = new Profile({
	    username: 'Ivan', 
	    name: { firstName: 'Ivan', lastName: 'Petrov'}, 
	    password: 'ivanpetrov',
	});

	const Lena = new Profile({
		username: 'Lena', 
		name: {firstName: 'Lena', lastName: 'Ivanova'}, 
		password: 'lenaivanova',
	});

	Ivan.createUser();

	Ivan.perfomLogin();

	Ivan.addMoney({ currency: 'rub', amount: 150 } , (err, data) => {
		if (err) {
			console.error(`Error during add money to ${username}`);
		} else {
			console.log(`Added ${amount} to ${username}`); 
		};
	});

	Ivan.convertMoney({ fromCurrency: 'rub' , targetCurrency: 'Netcoins', targetAmount: 100 } , (err, data) => {
		if (err) {
			console.error(`Error during convercy of money to ${username}`);
		} else {
			let convert = { name: targetCurrency, wallet: targetAmount, username: username };
			console.log(`Converted to coins ${convert}`);
		};
	});

	Ivan.transferMoney({ to: 'Lena' , amount: 50 }, (err, data) => {
		if (err) {
			console.error(`Error during transfering money to ${to}`);
		} else {
			let convert = { name: targetCurrency, wallet: targetAmount, username: username };
			console.log(`${to} has got ${amount} of NETCOINS`);
		};
	});
}

main();



