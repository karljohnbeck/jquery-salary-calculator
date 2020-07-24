console.log('JS');

$(document).ready(readyNow)

function readyNow() {
    console.log('JQ')
    $('#SubmitEmployeeData').on('click', populateTable)
    $('#employeeTableRows').on('click', '.deleteEmployeeBtn', removeEmployee)
}
let monthlyCosts = 0;
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
    let monthly = 0;
    for (let employee of employeeList) {
        monthly += Number(employee.annualSalary)
    }
    let monthlyCosts = monthly/12

    if (monthlyCosts > 20000) {
        $('#monthlyCosts').addClass("redBackground");
    }

    $('#monthlyCosts').empty()
    $('#monthlyCosts').append(`<h3 id="monthlyCosts">Total Monthly Cost: $${monthlyCosts}</h3>`)

    // $('#firstNameIn').val('');
    // $('#lastNameIn').val('');
    // $('#idNumberIn').val('');
    // $('#jobTitleIn').val('');
    // $('#annualSalaryIn').val('');
 console.log(monthlyCosts)
};

let = employeeList = [];

function removeEmployee() {
    console.log('BYE!')
    $(this).closest('tr').remove()
}
