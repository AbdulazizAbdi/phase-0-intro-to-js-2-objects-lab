const employee = {
    name: "Mike",
    streetAddress: "House 41",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeUpdate = {...employee};

    employeeUpdate[key] = value;

    return employeeUpdate
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    
    return employee;

}

function deleteFromEmployeeByKey(employee, name){
    const employeeDelete = {...employee};

    delete employeeDelete.name;

    return employeeDelete;

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    
    return employee

}