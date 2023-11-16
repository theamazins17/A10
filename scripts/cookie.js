var firstName = prompt("What is your first name?");

if (firstName) {
    document.cookie = "firstName=" + firstName + "; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/";
    alert("Hello, " + firstName + "!");
}
else {
    alert("You didn't enter a name. Please try again.");
}