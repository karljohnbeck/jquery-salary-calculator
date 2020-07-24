console.log('JS');

$(document).ready(readyNow) 

function readyNow() {
    console.log('JQ')
    $('#SubmitEmployeeData').on('click', populateTable)
}

function populateTable() {
    console.log('hurray')
};