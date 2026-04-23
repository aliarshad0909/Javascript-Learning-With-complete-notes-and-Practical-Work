class Employee {
    constructor(name) {
        this.name = name;
        console.log(`${name} - constructor is launched`);
    }

    login() {
        console.log(`The employee has logged in`);
    }

    logout() {
        console.log(`The employee has logged out`);
    }

    requestleaves(leaves) {
        console.log(`Employee has requested leaves ${leaves} - auto approved`);
    }
}

class Programmer extends Employee {
    constructor(name) {
        super(name); // pass name to parent
        console.log(`${name} - this is a newly built container`);
    }

    requestcoffee(x) {
        console.log(`The employee has requested ${x} coffee`);
    }

    requestleaves(leaves) {
        super.requestleaves(leaves);
        console.log("1 extra is granted");
    }
}

let e = new Programmer('Ali');
e.login();
e.requestleaves(3);