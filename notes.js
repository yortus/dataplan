var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Participant = class Participant {
    constructor(x) {
        this.id = 42;
    }
};
__decorate([
    pk, 
    __metadata('design:type', Number)
], Participant.prototype, "id", void 0);
__decorate([
    json, 
    __metadata('design:type', Array)
], Participant.prototype, "roles", void 0);
Participant = __decorate([
    table, 
    __metadata('design:paramtypes', [Object])
], Participant);
let Employee = class Employee extends Participant {
    get fullName() { return this.firstName + this.lastName; }
};
Employee = __decorate([
    table, 
    __metadata('design:paramtypes', [])
], Employee);
let TeamMember = class TeamMember {
};
TeamMember = __decorate([
    view(Participant, Employee), 
    __metadata('design:paramtypes', [])
], TeamMember);
// has-a (implies cascading delete, update, etc)
class Customer {
}
class CustomerOrder {
}
class CustomerOrderLine {
}
// refs-a
class OrderLine {
}
class Product {
}
// TODO: decorator defns
function table(...args) { }
function pk(...args) { }
function json(...args) { }
function view(...args) { return (...tables) => { }; }
