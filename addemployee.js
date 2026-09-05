document.getElementById("registrationForm").addEventListener("submit" , function(event){
 event.preventDefault();
 const Employee = document.getElementById("employeeID").value;
 const PhoneNo = document.getElementById("phone").value;
 const FirstName = document.getElementById("NameInput").value;
 const Age = document.getElementById("age").value;
 const Email = document.getElementById("email").value;
 const Aadhar = document.getElementById("aadhar").value;
 console.log("Submitted", Employee,PhoneNo,FirstName,Age,Email,Aadhar);
 event.target.reset();
});

let count = 0;
const Btn4 = document.getElementById("mybutton");
Btn4.addEventListener('click',function(event){
    event.preventDefault();
    count++;
    console.log(count);
});

