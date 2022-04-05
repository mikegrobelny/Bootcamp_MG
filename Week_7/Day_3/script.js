function sendData() {
    event.defaultPrevented();
    const fName = document.querySelector('input[name="fname"]').value
    const sName = document.querySelector('input[name="sname"]').value
    const Email = document.querySelector('input[name="email"]').value

    console.log(fName);
    console.log(sName);
    console.log(email);

const dataToSend = {
    first_name: fName,
    surname: sName,
    email: email
}

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(dataToSend)
    })
    .then(response => {
        console.log(response);
        if(response.status == '201') {
            alert('HTTP request worked')
        }
        return response.json()
    })
    .catch((error) => console.log(error.message));