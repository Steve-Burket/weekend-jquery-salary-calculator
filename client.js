/*
  1. Create input form
  2. Submit button to collect info
     a.Store info to calculate monthly cost
  3. Append info to the DOM 
    a. clear input fields
    b. if total monthly cost is > 20,000, add red bkrnd color to total monthly cost
  4. Create a delete btn to remove employee from DOM (for base mode does need to remove salary from reported total
*/

// make an array to hold employee info
const employeeInfo = [
  {
    firstName: "",
    lastName: "",
    id: "",
    title: "",
    annSal: "",
  },
];

const totalAnnSal = [];
console.log(totalAnnSal);


function readyNow() {
  // add listener to submit btn
  $("#submit-btn").on("click", function () {
    // target form values to append to DOM
    const firstName = $("#first-name").val();
    const lastName = $("#last-name").val();
    const id = $("#id").val();
    const title = $("#title").val();
    const annSal = $("#annual-sal").val();
    // call addEmployee function to append employee to the DOM
    addEmployee(firstName, lastName, id, title, annSal);
  });

  // // call calculateMonthlyCost
  // calculateMonthlyCost(totalAnnSal);

  // clear the values before populating to table
  $("#employee-list").empty();

  for (let i = 0; i < employeeInfo.length; i++) {
    // call addEmployee function for every employee
    // pass in all values from form
    addEmployee(
      employeeInfo[i].firstName,
      employeeInfo[i].lastName,
      employeeInfo[i].id,
      employeeInfo[i].title,
      employeeInfo[i].annSal
    );
  } // end for loop

  // create remove employee button to show when new employee is added
  $("#employee-list").on("click", ".removeEmployee", function (event) {
    let removeEmployeeBtn = $(event.target);
    removeEmployeeBtn.closest("tr").remove();
  });
}

// create function to add employees to employee info
function addEmployee(firstName, lastName, id, title, annSal) {
  $("#employee-list-out").append(
    `<table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Salary</th>
            <th>Remove Employee</th>
          </tr>
        </thead>
        <tbody>
          <tr id='employee-list'>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annSal}</td>
            <td>
            <button class="removeEmployee">Remove</button>
            </td>
          </tr>
          </tbody>
      </table>`
  );


  // empty inputs
  $("#first-name").val("");
  $("#last-name").val("");
  $("#id").val("");
  $("#title").val("");
  $("#annual-sal").val("");

  return employeeInfo;
}


// create function to calculate the monthly total
function calculateMonthlyCost(totalAnnSal) {
  console.log('in calculateMonthlyCost', calculateMonthlyCost);
  
  // call addEmployee function
  addEmployee();
  // grab all values put into annual salary input, push to totalAnnSal array
  // loop through array to add values and divide by 12 to get monthly total
  let salary = $("#annual-sal");
  // totalAnnSal.push(Number(annSal));
  for (let i = 0; i < employeeInfo.length; i++) {
    if (employeeInfo[i].annSal === 0) {
      totalAnnSal.push(Number(salary));
    }
  } // end for loop
  // display it to the DOM
  // clear the values before adding to DOM
  $('#employee-list-out').empty();
  $('#total-monthly-out').append(`Total Montly Cost: $ ${annSal}`);
  return totalAnnSal;
}

$(document).ready(readyNow);

// save for later
// prevent user from leaving a field blank
// create variable to hold input values
// create loop through employeeInfor array
// if (
//   $("#first-name") === "" ||
//   "#last-name" === "" ||
//   "#id" === "" ||
//   "#title" === "" ||
//   "#annSal" === ""
// ) {
//   alert("Can not leave blank field!");
// } else {
//   // loop through empmloyee array
//   for (let i = 0; employeeInfo.length[i]; i++) {
//     // for each employee, create td value
// }
