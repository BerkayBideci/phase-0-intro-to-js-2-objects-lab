// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "10 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee }
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const deletedFromEmployeeByKey = { ...employee }
    delete deletedFromEmployeeByKey[key]
    return deletedFromEmployeeByKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}