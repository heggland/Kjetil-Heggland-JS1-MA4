const form = document.querySelector("#contactForm");
const lastName = document.querySelector("#lastName");

function validateForm() {
	event.preventDefault();

	if (checkLength(lastName.value, 4) === true) {
		lastNameError.style.display = "none";
		console.log("Last name: " + lastName.value);
	} else {
		lastNameError.style.display = "block";
	}

}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

