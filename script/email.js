emailjs.init("hDbdVIiECLtHrBj-p");

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var number = document.getElementById('number').value;
  var message = document.getElementById('message').value;

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var numberError = document.getElementById('numberError');
  var messageError = document.getElementById('messageError');


  // Reset errors
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  numberError.innerHTML = "";
  messageError.innerHTML = "";

  
  // Name validation
  if (name.trim() === "") {
    nameError.innerHTML = "Name is required";
    swal("Error", "Please Enter Your Name", "error");
  
    return;
  }


  // Email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Invalid email address";
    swal("Error", "Please Enter Your Valid Email Address", "error");

    return;
  }

  var phonePattern = /^(\d{10}|\d{3}[-\s]\d{3}[-\s]\d{4}|\(\d{3}\)[-\s]\d{3}[-\s]\d{4})$/;

  if (!phonePattern.test(number)) {
    numberError.innerHTML = "Invalid phone number address";
    swal("Error", "Please Enter a Valid Phone Number", "error");

    return;
  }
  // Message validation
  if (message.trim() === "") {
    messageError.innerHTML = "Message is required";
    swal("Error", "Please Text Purpose Of Contact", "error");

    return;
  }
  // If all validations pass, send the email
  sendEmail(name, email,number,message);
}


emailjs.init("hDbdVIiECLtHrBj-p");
function sendEmail() {
    var form = document.getElementById("contactForm");
    emailjs.sendForm("service_v3v0tqx", "template_465m6hx", form)
        .then(
          
            function(response) {
                console.log("Email sent successfully", response);
                // alert("Your message has been sent successfully.");
                swal("Secussful", "Your message has been sent successfully", "success");
            },

            function(error) {
               document.getElementById("InsertRecordFIELDNAME").required = true;

                console.log("Failed to send email. Error:", error);
      swal("Error", "You clicked the button!", "error");

                alert("Sorry, there was an error sending your message. Please try again later.");
            }
        );
}































// function emailSend(){

//     var userName = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
 
//     var messageBody = "Name " + userName +
//     "<br/> Phone " + phone +
//     "<br/> Email " + email;
//     Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "anitus@jeevisoft.com",
//     Password : "490E8C79923800957BA8E1EC0F811E7BBA6A",
//     To : '	jeevisoftacademy@gmail.com',
//     From : "anitus@jeevisoft.com",
//     Subject : "This is the subject",
//     Body : messageBody
//  }).then(
//   message => {
//       if(message=='OK'){
//           swal("Secussful", "You clicked the button!", "success");
//       }
//       else{
//           swal("Error", "You clicked the button!", "error");
//       }
//   }
//  );
//  }
 