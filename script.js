function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById('form1');

    // Access the input fields using their names
    var firstName = form.fname.value;
    var lastName = form.lname.value;

    // Display the values using an alert
    alert(firstName +" "+ lastName);

    // Prevent the form from actually submitting and refreshing the page
    event.preventDefault();
}
