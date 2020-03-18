// Add your code here
function  appendToDom(object){
  const body = document.querySelector("body")
  body.innerHTML += `
  <p> ${object.id} </p>
  `
}


function  submitData(name, email){
  let formData = {
    name: name,
    email: email
  }

  let configObj = {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json()
  })
  .then(function(object) {
    appendToDom(object)
  })
  .catch(function(error) {
    alert("Unauthorized Access")
    appendToDom(error.message)
  })
  debugger;
}

submitData()
