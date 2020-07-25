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
        secretIndex: employeeList.length,

    }
    employeeList.push(employeeData);
    console.log(employeeList)

    $('#employeeTableRows').empty();

    for (let i = 0; i < employeeList.length; i++) {
        $('#employeeTableRows').append(`
        <tr>
            <td>${employeeList[i].firstName}</td>
            <td>${employeeList[i].lastName}</td>
            <td class="employeeID">${employeeList[i].idNumber}</td>
            <td>${employeeList[i].jobTitle}</td>
            <td>${employeeList[i].annualSalary}</td>
            <td><button class="deleteEmployeeBtn btn btn-danger">Delete</button></td>
        </tr>`)
    }
    let monthly = 0;
    for (let employee of employeeList) {
        monthly += Number(employee.annualSalary)
    }
    let monthlyCosts = (monthly / 12)

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
    
    console.log($(this).closest('tr').index())
    
    let index = ($(this).closest('tr').index())

    employeeList.splice(index, 1)
    
    $(this).closest('tr').remove()
    console.log(employeeList)

    let monthly = 0;
    for (let employee of employeeList) {
        monthly += Number(employee.annualSalary)
    }
    let monthlyCosts = (monthly / 12)

    if (monthlyCosts > 20000) {
        $('#monthlyCosts').addClass("redBackground");
    }

    $('#monthlyCosts').empty()
    $('#monthlyCosts').append(`<h3 id="monthlyCosts">Total Monthly Cost: $${monthlyCosts}</h3>`)

}
