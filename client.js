console.log('JS');

$(document).ready(readyNow) 

function readyNow() {
    console.log('JQ')
    $('#SubmitEmployeeData').on('click', populateTable)
}

function populateTable() {
    console.log('hurray')
    let employeeData = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val(),
    }
    employeeList.push(employeeData);
    console.log(employeeList)
    
};

let = employeeList = [];
