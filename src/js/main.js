function printName(name, func) {
    console.log(name);
    func();
}

printName('Bob', () => {
	console.log('Hello from arrow function');
});
