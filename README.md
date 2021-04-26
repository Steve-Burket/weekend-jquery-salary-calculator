# jQuery Salary Calculator

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Make an app to calculate total monthly cost for all employees
- Utulize all the tools you've added to your belt so far in the boot camp program
    - HTML
    - CSS
    - JavaScript
    - jQuery

> Your project description goes here. What problem did you solve? How did you solve it?

Built an app to take in form values including _employee first name, last name, ID number, job title, annual salary_.
Used jQuery to grab the values from the inputs upon a click and append it to the DOM. 
I created a three functions including:
- A `readyNow` to hold a listener for the button click
- A `addEmployee` function to append employee info to the DOM
- A `calculateTotalMonthlyCost` to add up all employees annual salaries and append the monthly total to the DOM
    - this function also contains an `if` statement that highlights the total monthly cost red if it exceed $20,000.

### Challenges
I had to solve how to connect functions together to work at the right moments. I had a bug where the first output to the DOM after the click wasn't appending the value put in but with a little help figured out where to move it so it would fire at the appropriate time. I solved a lot of problems by asking an exorbitant amount of questions! 



Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
