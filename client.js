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

    $('#employeeTableRows').empty();
    for (let employee of employeeList) {
        $('#employeeTableRows').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="deleteEmployeeBtn">Delete</button></td>
        </tr>`)
    }

    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
        $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');

};

let = employeeList = [];

