declare class Dataplan {
    query(s: string): this;
}
type Table<T> = any;
type VirtualTable<T> = any;
type View<T> = any;
type User = any;
type Related<T> = any;


class Database extends Dataplan {
    customers: Table<Customer>;
    orders: Table<Order>;
    users: VirtualTable<User>;
    vipCustomers: View<Customer>;
}

class Customer {
    id: number;
    firstName: string;
    lastName: string;
    get fullName() { return `${this.firstName} ${this.lastName}`; }

    orders: Related<Order>; // FK
}

class Order {
    id: number;
    date: Date;
    description: string;

    customer: Customer; // FK
}





let db = new Database();

db.query(`order.customer.id = 1234`).