let employee = {
    name: 'Sam',
    StreetAddress: 'i Main St'
};

function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
        return {
        ...employeeObj,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
      employeeObj[key] = value;
    return employeeObj;
}

function deleteFromEmployeeByKey(employeeObj, key) {
    
    const newObj = { ...employeeObj };
    delete newObj[key];
    return newObj;
}


function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    
    delete employeeObj[key];
    return employeeObj;
}