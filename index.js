const usernameInput = document.querySelector('input[name="username"]');
const licenseInput = document.querySelector('input[name="license"]');
const upgradeButton = document.querySelector('button[name="upgrade"]');
const form = document.querySelector('form');


var path = window.location.pathname;

if (!path.endsWith("/upgrade")) {
 //   window.location.href = "index.html";
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const license = licenseInput.value;

    fetch('https://api.thunder-services.org/api/v2/upgrade', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "username": username, "key": license })
    })
    .then(response => response.json())
    .then(response => {
        if(response.status === "error") {
             swal("Oops", response.message, "error");
        } else if(response.status === "success") {
           swal("Sucess", "Successfully upgraded to :" + response.message, "success");
        }
    })
    .catch(error => console.error('Error:', error));
});
