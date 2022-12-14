// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// creates the para element in document that contains the thank you message
const thankYouElement = document.createElement("p");
thankYouElement.innerHTML = "Thank you for your message";

// adds the "thank-you" class into the p element created
thankYouElement.classList.add("thank-you");

var contactPage = document.getElementById("contact-page");
const contactPageForm = document.querySelector("form");

function clickSubmit(e) {
    // prevents the submit message to get submitted until the rest of the function is carried out
    e.preventDefault();
    // creates a list stored as pageChildren made from all the elements inside the #contact-page
    var contactPageChildren = Array.from(contactPage.children);
    // for each element inside the list created above add "hidden" into their class
    contactPageChildren.forEach(function (element) {
        // adds hide class to element so they hide once the submit button is clicked
        element.classList.add("hide");
    });
    // adds the thank you message to  the contact page 
    thankYouElement.style.fontSize = '24px';
    contactPage.appendChild(thankYouElement);
}

contactPageForm.addEventListener("click", clickSubmit);




