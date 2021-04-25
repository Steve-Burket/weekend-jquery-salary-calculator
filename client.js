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

function readyNow() {
  console.log("jQ");
  // add listener to submit btn
  $("#submit-btn").on("click", function (event) {
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
    // call addEmployee funtion for every employee
    // pass in all values from form
    addEmployee(
      employeeInfo[i].firstName,
      employeeInfo[i].lastName,
      employeeInfo[i].id,
      employeeInfo[i].title,
      employeeInfo[i].annSal
    );
  }

  // create remove employee buttong upon addEmployee firing
  $("#employee-list").on("click", ".removeEmployee", function (event) {
    let removeEmployeeBtn = $(event.target);
    removeEmployeeBtn.closest("tr").remove();
  });
}

// create function to add employees to employee info
function addEmployee(firstName, lastName, id, title, annSal) {
  // prevent user from leaving a field blank
  // create variable to hold input values
  // create loop through employeeInfor array
  if (
    firstName === "" ||
    lastName === "" ||
    id === "" ||
    title === "" ||
    annSal === ""
  ) {
    alert("Can not leave blank field!");
  } else {
    // loop through garage array
    for (let employee of employeeInfo) {
      // for each employee, create td value
      $("#employee-list").append(
        `<table>
            <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>ID</th>
            <th>Title</th>
            <th>Annual Salary</th>
          </tr>
          <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annSal}</td>
            <td colspan='2'>
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
      $("annual-sal").val("");
    } // end for of
    return employeeInfo;
  }
};

$(document).ready(readyNow);
