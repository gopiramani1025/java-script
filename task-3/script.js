var form = document.querySelector('form');
var totalInstallment = document.querySelector('#total-installment');
var total = document.querySelector('#total');
var totalInterest= document.querySelector('#total-interest');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var formDataObj = new FormData(form);
  var amount = parseFloat(formDataObj.get('amount'));
  var term = parseFloat(formDataObj.get('term'));
  var rate = parseFloat(formDataObj.get('rate'));
  var mortgateType = formDataObj.get('morgate-Type');

  // Debugging inputs
  console.log({ amount, term, rate, mortgateType });

  // Validate Inputs
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid loan amount.");
    return;
}
if (isNaN(term) || term <= 0) {
    alert("Please enter a valid loan term.");
    return;
}
if (isNaN(rate) || rate <= 0) {
    alert("Please enter a valid interest rate.");
    return;
}

// Calculate EMI
var emi = calculateMonthlyEMI(amount, term, rate);
console.log("EMI:", emi); // Debugging the EMI calculation

// Update the UI
totalInstallment.innerHTML =  `£${emi}`;
total.innerHTML = `£${emi * term * 12}`;
totalInterest.innerHTML = `£${emi * term * 12 - amount}`;
});

function calculateMonthlyEMI(amount, term, rate) {
    let monthlyRate = rate / (12); // Convert annual rate to monthly decimal
    monthlyRate = monthlyRate / 100;
    term = term * 12;
    let emi = amount * monthlyRate *( Math.pow(1 + monthlyRate, term) / 
              (Math.pow(1 + monthlyRate, term) - 1) );

    return emi.toFixed(2); // Returning EMI rounded to 2 decimal places
};

function clculateAmount() {
    if (!isNaN(monthlyPayment) && (monthlyPayment != Infinity) && (monthlyPayment != -Infinity) && (monthlyPayment > 0)) {
        document.getElementById("monthlyPayment").innerText = monthlyPayment.toFixed(2);
        document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
    } else {
        document.getElementById("monthlyPayment").innerText = "Invalid Input";
        document.getElementById("totalAmount").innerText = "Invalid Input";
    }

}

function calculateMortgage() {
    // Get values from the form
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly rate
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12; // Months

    // Check if inputs are valid
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || interestRate <= 0 || loanTerm <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate monthly payment using the mortgage formula
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    // Display the result
    document.getElementById('monthlyPayment').innerText = monthlyPayment.toFixed(2);
}

  

