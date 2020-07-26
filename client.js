console.log('JS');
//onstart up ready these jquery buttons
$(document).ready(readyNow)

function readyNow() {
    console.log('JQ')
    // Submit button
    $('#SubmitEmployeeData').on('click', populateTable)
    // delete employee data button
    $('#employeeTableRows').on('click', '.deleteEmployeeBtn', removeEmployee)
}
// used for calculating the monthly cost
let monthlyCosts = 0;
// stores the employee data in this array
let = employeeList = [];

function populateTable() {
    console.log('hurray')
    // if in input is empty, stop and alert the user
    if ($('#firstNameIn').val() === '' ||
        $('#lastNameIn').val() === '' ||
        $('#idNumberIn').val() === '' ||
        $('#jobTitleIn').val() === '' ||
        $('#annualSalaryIn').val() === '') {
        alert('Please fill out all inputs')
    } else {
        // store the input data as an object
        let employeeData = {
            firstName: $('#firstNameIn').val(),
            lastName: $('#lastNameIn').val(),
            idNumber: $('#idNumberIn').val(),
            jobTitle: $('#jobTitleIn').val(),
            annualSalary: $('#annualSalaryIn').val(),
            // this is used for locating the object later
            secretIndex: employeeList.length,

        }
        // pus the object to the employee array
        employeeList.push(employeeData);
        console.log(employeeList)

        // empty the DOM so it is ready for the table data to be written
        $('#employeeTableRows').empty();

        // for loop that us used to append all the employees in the array onto the DOM
        // along with the delete button
        for (let i = 0; i < employeeList.length; i++) {
            $('#employeeTableRows').append(`
        <tr>
            <td>${employeeList[i].firstName}</td>
            <td>${employeeList[i].lastName}</td>
            <td class="employeeID">${employeeList[i].idNumber}</td>
            <td>${employeeList[i].jobTitle}</td>
            <td>$${employeeList[i].annualSalary}</td>
            <td><button class="deleteEmployeeBtn btn btn-danger">Delete</button></td>
        </tr>`)
        }
        // value for calculating monthy cost
        let monthly = 0;
        // loop that adds all the yearly salary and after devides by 12
        for (let employee of employeeList) {
            monthly += Number(employee.annualSalary)
        }
        let monthlyCosts = (monthly / 12)
        // if monthlyCosts variable is over number, make that number red
        if (monthlyCosts > 20000) {
            $('#monthlyCosts').addClass("redBackground");
        }
        // append the monthly cost to the append
        $('#monthlyCosts').empty()
        $('#monthlyCosts').append(`<h3 id="monthlyCosts">Total Monthly Cost: $${monthlyCosts}</h3>`)
        // clear the input fields
        $('#firstNameIn').val('');
        $('#lastNameIn').val('');
        $('#idNumberIn').val('');
        $('#jobTitleIn').val('');
        $('#annualSalaryIn').val('');
        console.log(monthlyCosts)
    }
};

// delete button function
function removeEmployee() {
    console.log($(this).closest('tr').index())

    // locate the specific index of the item we want to delete by the id we gave each tr
    // store this value in a variable
    let index = ($(this).closest('tr').index())

    // splice out the object at the same index ad index
    employeeList.splice(index, 1)

    // remove the closest table row from the dom 
    $(this).closest('tr').remove()
    console.log(employeeList)

    // math to make removed object affect the monthly cost on the page
    let monthly = 0;
    for (let employee of employeeList) {
        monthly += Number(employee.annualSalary)
    }
    let monthlyCosts = (monthly / 12)

    if (monthlyCosts > 20000) {
        $('#monthlyCosts').addClass("redBackground");
    } else {
        $('#monthlyCosts').removeClass("redBackground");
    }
    $('#monthlyCosts').empty()
    $('#monthlyCosts').append(`<h3 id="monthlyCosts">Total Monthly Cost: $${monthlyCosts}</h3>`)

}
