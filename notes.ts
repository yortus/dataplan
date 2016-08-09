@table
class Participant {

  	@pk
  	id: number;

	@json
	roles: string[];
}


@table
class Employee extends Participant {

  	firstName: string;

	lastName: string;

	get fullName() { return this.firstName + this.lastName; }
	// set ...

}


@view(Participant, Employee)
class TeamMember {
  	firstName: string;
	lastName: string;

	// TODO: how to compute these?
	leaderships: string;
	memberships: string;
}


// has-a (implies cascading delete, update, etc)
class Customer {
	orders: CustomerOrder[]; // implies containment
}
class CustomerOrder {
	// backlink to Customer? added automatically?
	lines: CustomerOrderLine[];
}
class CustomerOrderLine {
	// backlink to CustomerOrder? added automatically?
}


// refs-a
class OrderLine {
	product: Product; // implies cross-reference
}
class Product {
	// backlink to OrderLine[] list? added automatically?
}


// TODO: decorator defns
var table;
var pk;
var json;
function view(...args) { return (...tables) => {}; }
