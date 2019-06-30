// Add your code here
const body = document.querySelector('body')
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => response.json())
  .then(json => {
    const p = document.createElement('p')
    p.innerHTML = json.id
    body.appendChild(p)
  })
  .catch(function(error) {
    const p = document.createElement('p')
    p.innerHTML = error.message
    body.appendChild(p)
  });
}
