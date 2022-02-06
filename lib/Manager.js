// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 

        this.role = "Manager"
    }
    // Get office number method retrieves the user-input office number for this class manager
    getOfficeNumber(){
        return this.officeNumber;
    }
    // override employee role to manager class
    getRole () {
        return this.role;
    }
}

// to be exported 
module.exports = Manager; 