

class Profile {
	constructor (username, name, password) {
		this.username = username;
		this.name = name;
		this.firstName = name.firstName;
		this.lastName = name.lastName;
		this.password = password;
	}	

	createUser(callback) {
        return ApiConnector.createUser({username: this.username, name: this.name, password: this.password},(err, data) => {
        console.log(`Creating user: ${this.username}`)
        callback(err, data);
        });
	}

	performLogin(callback) {
		return ApiConnector.performLogin({username: this.username, name: this.name, password: this.password}, (err, data) => {
        console.log(`Authorizing user: ${this.username}`);
        callback(err, data);
        });
	}

	addMoney({ currency, amount }, callback) {
		return ApiConnector.addMoney({ currency, amount }, (err, data) => {
        console.log(`Adding ${amount} of ${currency} to ${this.username}`);
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
	return ApiConnector.getStocks((err, data) => {
        if (err) {
			console.error(`Error in getting curse`);
		} else {
			let curse = data; 
			console.log(curse);
		};
    });
}

getStocks();

function main() {

	const Ivan = new Profile('Ivan', {firstName: 'Ivan' ,lastName: 'Petrov'}, 'ivanpetrov');
	
	const Lena = new Profile('Lena', {firstName: 'Elena' ,lastName: 'Sokolova'}, 'lenasokol')

	

	Ivan.createUser((err, data) => {
		if (err) {
			console.error(`User ${this.username} is not created`);
		} else {
			console.log(`User ${this.username} is created`); 
		}
	});

	Lena.createUser((err, data) => {
		if (err) {
			console.error(`User ${this.username} is not created`);
		} else {
			console.log(`User ${this.username} is created`); 
		}
	});


	Ivan.performLogin((err, data) => {
		if (err) {
			console.error(`User ${this.username} is not authorised`);
		} else {
			console.log(`${this.username} is authorised`); 
		}
	});


	Ivan.addMoney({ currency: 'rub', amount: 150 } , (err, data) => {
		if (err) {
			console.error(`Error during add money to ${this.username}`);
		} else {
			console.log(`Added ${amount} to ${this.username}`); 
		};
	});


	Ivan.convertMoney({ fromCurrency: 'rub' , targetCurrency: 'Netcoins', targetAmount: 100 } , (err, data) => {
		if (err) {
			console.error(`Error during convercy of money to ${this.username}`);
		} else {
			let convert = { name: targetCurrency, wallet: targetAmount, username: this.username };
			console.log(`Converted to coins ${convert}`);
		};
	});


	Ivan.transferMoney({ to: 'Lena' , amount: 50 }, (err, data) => {
		if (err) {
			console.error(`Error during transfering money to ${to}`);
		} else {
			let convert = { name: targetCurrency, wallet: targetAmount, username: this.username };
			console.log(`${to} has got ${amount} of NETCOINS`);
		};
	});
}

main();



