// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ', employees);


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
for (let employee of employees) {
  console.log('Current Employee:',employee);
  console.log('Bonus info:', calculateIndividualEmployeeBonus(employee));

}



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  // your logic here
  let bonus = {}
  //declares object that we can add parameters to 


  bonus.name = employee.name;

  //creates criteria for different employee ratings 3
  if (employee.reviewRating === 3) {
    //allots extra bonus for employees with 4 digit long employeeNumber
    if (employee.employeeNumber.length === 4) {
      bonus.bonusPercentage = 0.09;
      bonus.totalBonus = employee.annualSalary * bonus.bonusPercentage;
      bonus.totalCompensation = Number(employee.annualSalary) + bonus.totalBonus;
    } else {
      bonus.bonusPercentage = 0.04;
      bonus.totalBonus = employee.annualSalary * bonus.bonusPercentage;
      bonus.totalCompensation = Number(employee.annualSalary) + bonus.totalBonus
    }
  }
  //creates criteria for different employee ratings 4
  else if (employee.reviewRating === 4) {
    //allots extra bonus for employees with 4 digit long employeeNumber
    if (employee.employeeNumber.length === 4) {
      bonus.bonusPercentage = 0.11;
      bonus.totalBonus = employee.annualSalary * bonus.bonusPercentage;
      bonus.totalCompensation = Number(employee.annualSalary) + bonus.totalBonus;
    } else {
      bonus.bonusPercentage = 0.06;
      bonus.totalBonus = employee.annualSalary * bonus.bonusPercentage;
      bonus.totalCompensation = Number(employee.annualSalary) + bonus.totalBonus;
    }
  }
  //creates criteria for different employee ratings 5
  else if (employee.reviewRating === 5) {
    //allots extra bonus for employees with 4 digit long employeeNumber
    if (employee.employeeNumber.length === 4) {
      bonus.bonusPercentage = 0.15;
      bonus.totalBonus = employee.annualSalary * bonus.bonusPercentage;
      bonus.totalCompensation = Number(employee.annualSalary) + bonus.totalBonus;
    } else {
      bonus.bonusPercentage = 0.1;
      bonus.totalBonus = employee.annualSalary * bonus.bonusPercentage;
      bonus.totalCompensation = Number(employee.annualSalary) + bonus.totalBonus;
    }
  }
  
  //reduces the bonus percentage if salary more than 65000
  if (Number(employee.annualSalary) > 65000) {
    bonus.bonusPercentage - 0.01;
  }

  //makes sure that the bonus is never more than 0.13
  if (bonus.bonusPercentage > 0.13) {
    bonus.bonusPercentage = 0.13
  }








  return bonus;// return new object with bonus results

}