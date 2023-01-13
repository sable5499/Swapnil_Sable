const form = document.querySelector("#form");

const users = [];

var modal = document.getElementById("myModal");
var btn = document.getElementById("send-btn");
var span = document.getElementsByClassName("close")[0];

// Open modal

btn.onclick = function(){
  let f_name = document.getElementById("fname").value;
  let l_name = document.getElementById("lname").value;
  let email_id = document.getElementById("emailId").value;
  let contact = document.getElementById("contactNum").value;
  let msg = document.getElementById("message").value;

  if(f_name.replaceAll(" ", '').length === 0 || l_name.replaceAll(" ", '').length === 0 || email_id.replaceAll(" ", '').length === 0 || contact.replaceAll(" ", '').length === 0 || msg.replaceAll(" ", '').length === 0) {
    alert("Please fill all details")
    form.reset();
    return;
  }

  users.push({
    First_Name: f_name,
    Last_Name: l_name,
    Email: email_id,
    Contact: contact,
    Message: msg,
  });

  form.reset();
  modal.classList.remove('hide');

  // callAPI() //calling api
}

// Close modal
span.onclick = function(){
  modal.classList.add('hide');
}

 // Anywhere outside box
window.onclick = function(event){
  if (event.target == modal){
    modal.classList.add('hide');
  }
}


function getResume() {
  window.open("https://drive.google.com/file/d/1HO24zhMhHHEMyYIS64apeAZ3pJBlizof/view?usp=sharing");
}

// API example
// function callAPI() {
//   fetch('https://dummy.restapiexample.com/api/v1/employees')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("data",data)
//     let apiData = data
//     if(apiData.status == "success") {
//       console.log("apiData",apiData.data)
//     }
//   });
// }
