class Employee {
	constructor (name, title, salary, manager = null) {
		this.name = name;
		this.title = title;
		this.salary = salary;
		this.manager = manager;

		if (manager) {
			this.manager.addEmployee(this);
		}
	}
}


module.exports = Employee;
