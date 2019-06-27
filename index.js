// Add your code here
const errorMsg = document.querySelector("#error")
const userList = document.querySelector("#user-list");

function submitData(userName, userEmail) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({name: userName, email: userEmail})
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        addToDom(object)
    })
    .catch(function (error) {
        errorMsg.innerText = error.message
    })
}

function addToDom(obj) {
    const userItem = document.createElement("li")
    //const itemText = document.createTextNode(
    userItem.textContent = `ID: ${obj.id}  Name: ${obj.name}  Email: ${obj.email}`
    //userItem.innerText = 
    //userItem.appendChild(itemText)
    userList.appendChild(userItem)
}