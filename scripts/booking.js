/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyRate = 35.0;
var dayNumber = 0;
var updatedElements = [];


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeButtonColour(event) {
    // event.target returns which buttons were triggered and it will check if these buttons contain the class "clicked"
    var buttonSelected = event.target;
    // if buttonSelected does not contain "clicked" class 
    if (!buttonSelected.classList.contains("clicked")) {
        // then add a "clicked" class to the element
        buttonSelected.classList.add("clicked");
        // add it into the empty array updatedElements
        updatedElements.push(buttonSelected);
    }
    calculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    // for each element(day) in the updatedElements list 
    updatedElements.forEach(function (day) {
        // remove the "clicked" class
        day.classList.remove("clicked");
    });
    // reset the updatedElements list to empty again
    updatedElements = [];
    calculate();
  }


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullDayButton = document.getElementById("full");
var halfDayButton = document.getElementById("half");

function changeRate(event) {
    // when the selectedRated are triggered this will check if the id for the button has "full", if True it will run the calculated cost at $35
    var selectedRate = event.target;
    const fullRate = selectedRate.id === "full";
    // if the selected rate = to "half" 
    if (fullRate) {
        // else remove the "clicked" class from the halfDayButton element and change rate to $35
        halfDayButton.classList.remove("clicked");
        dailyRate = 35.0;
    } else {
        // remove the "clicked" class from the fullDayButton element and change rate to $20
        fullDayButton.classList.remove("clicked");
        dailyRate = 20.0;
    }
    // add the "clicked" class to the selectedRate and calculate the cost
    selectedRate.classList.add("clicked");
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

var calculatedCost = document.getElementById("calculated-cost");

function calculate() {
    // total number of days equals the length of the updatedElements list
    dayNumber = updatedElements.length;
    var totalCost = dayNumber * dailyRate;
    // calculated cost toal will be displayed in the calculated-cost class element
    calculatedCost.innerHTML = totalCost;
}

// program menu
const buttonsClasses = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'clear-button', 'half', 'full'];

// for each element in the buttonsClass list perform the following
buttonsClasses.forEach(function (buttonsClasses) {
    var selectedButton = document.getElementById(buttonsClasses);
    var buttonFunction;
    if (buttonsClasses === "clear-button"){
        buttonFunction = clearDays;
    } else if (buttonsClasses === "full") {
        buttonFunction = changeRate;
    } else if (buttonsClasses === "half") {
        buttonFunction = changeRate;
    } else {
        buttonFunction = changeButtonColour;
    }
    // listen to which buttons are clicked and then run the correct buttonFunction associated with the them
    selectedButton.addEventListener('click', buttonFunction);
});