// /*
//   1. Create input form
//   2. Submit button to collect info
//      a.Store info to calculate monthly cost
//   3. Append info to the DOM
//     a. clear input fields
//     b. if total monthly cost is > 20,000, add red bkrnd color to total monthly cost
//   4. Create a delete btn to remove employee from DOM (for base mode does need to remove salary from reported total
// */

// // make an array to hold employee info
let employeeInfo = [];

let totalAnnSal = [];
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
  employeeInfo.push({
    firstName: firstName,
    lastName: lastName,
    id: id,
    title: title,
    annSal: annSal,
  });

  $("#employee-list").append(
    `<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>$ ${annSal}</td>
    <td>
    <button class="removeEmployee">Remove</button>
    </td>
</tr>`
  );

  // empty inputs
  $("#first-name").val("");
  $("#last-name").val("");
  $("#id").val("");
  $("#title").val("");
  $("#annual-sal").val("");

  calculateMonthlyCost();

  // return employeeInfo;
}

// create function to calculate the monthly total
function calculateMonthlyCost() {
  // grab all values put into annual salary input, push to totalAnnSal array
  // loop through array to add values and divide by 12 to get monthly total
  let salary = 0;
  // totalAnnSal.push(Number(annSal));
  for (let i = 0; i < employeeInfo.length; i++) {
    salary += Number(employeeInfo[i].annSal) / 12;
  } // end for loop

  console.log(Math.round(salary));

  // make variable to hold total annual salary
  let total = $("#total-monthly-out");

  // empty it 
  // display it to the DOM
  total.empty();
  total.append(Math.round(salary));
  console.log(employeeInfo);

}

$("document").ready(readyNow);

// // save for later
// // prevent user from leaving a field blank
// // create variable to hold input values
// // create loop through employeeInfor array
// // if (
// //   $("#first-name") === "" ||
// //   "#last-name" === "" ||
// //   "#id" === "" ||
// //   "#title" === "" ||
// //   "#annSal" === ""
// // ) {
// //   alert("Can not leave blank field!");
// // } else {
// //   // loop through empmloyee array
// //   for (let i = 0; employeeInfo.length[i]; i++) {
// //     // for each employee, create td value
// // }
