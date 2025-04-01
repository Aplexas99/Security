function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    console.log("sendEmail function called");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    if (!name || !email || !message) {
      console.error("All fields must be filled out.");
      alert("Please fill out all fields before sending.");
      return;
    }
  
    window.location.href = `mailto:info@bralosecurity.nl?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${message}`;
  }
  