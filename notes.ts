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


	leaderships: string;


	memberships: string;

}



// TODO: decorator defns
var table;
var pk;
var json;
function view(...args) { return (...tables) => {}; }
