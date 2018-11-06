




$( document ).ready( readyNow );

function readyNow( ){
  $('#calculate').on('click', start);
}

function start( ){
  class Employee {
    constructor(name, employeeNumber, annualSalary, reviewRating) {
      this.name = name;
      this.employeeNumber = employeeNumber;
      this.annualSalary = annualSalary;
      this.reviewRating = reviewRating;
    } // end constructor
  } // end Employee class

  const atticus = new Employee('Atticus', '2405', '47000', 3); // this creates a new object
  const jem = new Employee('Jem', '62347', '63500', 4);
  const scout = new Employee('Scout', '6243', '74750', 5);
  const robert = new Employee('Robert', '26835', '66000', 1);
  const mayella = new Employee('Mayella', '89068', '35000', 2);

  const employees = [atticus, jem, scout, robert, mayella]; // this is an array of objects

  // YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

  // Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
  // This problem is massive! Break the problem down. Use the debugger.
  // What is the fewest lines of code I can write and test to get just a little closer?

  // This is not a race. Everyone on your team should understand what is happening.
  // Ask questions when you don't.

  console.log(employees);




  function bonusCalc(employee) {
    let bonus = 0;
    if (employee.reviewRating <= 2) {
    }
    else if (employee.reviewRating === 3) {
      bonus = employee.annualSalary * 0.04;
    }
    else if (employee.reviewRating === 4) {
      bonus = employee.annualSalary * 0.06;
    }
    else if (employee.reviewRating === 5) {
      bonus = employee.annualSalary * 0.10;
    }// end if/else
    if (employee.employeeNumber.length === 4) {
      bonus += (employee.annualSalary * 0.05);
    }
    if (employee.annualSalary > 65000) {
      bonus -= (employee.annualSalary * 0.01);
    }
    if (bonus / employee.annualSalary > 0.13) {
      bonus = employee.annualSalary * 0.13;
    }
    if (bonus / employee.annualSalary < 0.00) {
      bonus = 0;
    }
    return bonus;

  }// end bonusCalc function


  class EmployeeComp {
    constructor(name, bonusPercent, totalCompensation, totalBonus) {
      this.name = name;
      this.bonusPercent = bonusPercent;
      this.totalCompensation = totalCompensation;
      this.totalBonus = totalBonus;
    }// end constructor
  }// end EmployeeComp class

  let employeePackages = [];

  function determineBonus(employee) {
    let bonusAmount = bonusCalc(employee);
    let bonusPercent = (bonusAmount / employee.annualSalary) * 100;
    let totalComp = parseInt(employee.annualSalary) + bonusAmount;
    let employeePackage = new EmployeeComp(employee.name, bonusPercent, totalComp, bonusAmount);
    employeePackages.push(employeePackage);
    return employeePackage;
  }

  for (employee of employees) {
    console.log(determineBonus(employee));
  }
  let outputEl = $('#displayEmployee');
  outputEl.empty();
  for (employee of employeePackages) {
    outputEl.append('<li><span id="titles">Name: </span>' + employee.name + '</li><li><span id="titles">Bonus Percent: </span>' + employee.bonusPercent + '%</li><li><span id="titles">Total Compensation: </span>$' + employee.totalCompensation.toFixed(2) + '</li><li><span id="titles">Total Bonus: </span>$' + employee.totalBonus.toFixed(2) + '</li><br>')
  }
}// end start function