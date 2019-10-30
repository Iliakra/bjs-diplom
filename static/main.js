

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
		return ApiConnector.performLogin({username: this.username, password: this.password}, (err, data) => {
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
			console.error(`User is not created`);
		} else {
			console.log(`User ${data.username} is created`);
			Ivan.performLogin((err, data) => {
				if (err) {
					console.error(`User is not authorised`);
				} else {
					console.log(`Ivan is authorised`); 
					Lena.createUser((err, data) => {
						if (err) {
							console.error(`User is not created`);
						} else {
							console.log(`User ${data.username} is created`); 
							Ivan.addMoney({ currency: 'EUR', amount: 500 } , (err, data) => {
								if (err) {
									console.error(`Error during add money`);
								} else {
									console.log(`Added 500 EUROS to Ivan`); 
									Ivan.convertMoney({ fromCurrency: 'EUR' , targetCurrency: 'NETCOIN', targetAmount: 36 } , (err, data) => {
										if (err) {
											console.error(`Error during convercy of money`);
										} else {
											console.log(`Converted to coins ${data}`);
											Ivan.transferMoney({ to: 'Lena' , amount: 20 }, (err, data) => {
												if (err) {
													console.error(`Error during transfering money`);
												} else {
													console.log(`Lena has got 20 of NETCOINS`);
												};
											});
										};
									});
								}
							});
						}
					});

				}
			});

		}
	});
}

main();





