// Add your code here
function submitData(name, email) {
    //object gor the raw data by user
    const userData = {
      name: name,
      email: email
    };
  //a post request to server
    const userDataConfiguration = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    };
  
    return fetch("http://localhost:3000/users", userDataConfiguration)
      .then(response => response.json())
      .then(data => {
        document.body.innerHTML = data.id;
      })
      .catch(error => {
        document.body.innerHTML = error.message;
      });
  }
console.log(submitData('Steve','steve@steve.com'))
  
  
  

  
