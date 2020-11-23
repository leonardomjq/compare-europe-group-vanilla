const API_URL = 'https://jsonplaceholder.typicode.com/users';
const cardsElement = document.querySelector('.cards')

async function getUserData() {
		const response = await fetch(API_URL);
		
    if (response.status >= 200 && response.status <= 299) {

			document.getElementById("loading").style.display = 'none';

			const json = await response.json();

			console.log(json)
			
			json.forEach(user => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const ulElement = document.createElement('ul');
        cardElement.appendChild(ulElement);

        const liElement_Name = document.createElement('li');
        const liElement_Username = document.createElement('li');
        const liElement_Email = document.createElement('li');
        const liElement_Phone = document.createElement('li');
        const liElement_Address = document.createElement('li');

        ulElement.appendChild(liElement_Name);
        ulElement.appendChild(liElement_Username);
        ulElement.appendChild(liElement_Email);
        ulElement.appendChild(liElement_Phone);
        ulElement.appendChild(liElement_Address);

        const strongElement_Name = document.createElement('strong');
        strongElement_Name.innerHTML = (`Name: ${user.name}`);
        liElement_Name.appendChild(strongElement_Name);

        const strongElement_Username = document.createElement('strong');
        strongElement_Username.innerHTML = (`Username: ${user.username}`);
        liElement_Username.appendChild(strongElement_Username);

        const strongElement_Email = document.createElement('strong');
        strongElement_Email.innerHTML = (`Email: ${user.email}`);
        liElement_Email.appendChild(strongElement_Email);

        const strongElement_Phone = document.createElement('strong');
        strongElement_Phone.innerHTML = (`Phone: ${user.phone}`);
        liElement_Phone.appendChild(strongElement_Phone);

        const strongElement_Address = document.createElement('strong');
        strongElement_Address.innerHTML = (`Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`);
        liElement_Address.appendChild(strongElement_Address);

        cardsElement.appendChild(cardElement);
		});
    } else {
			// Handle errors
			console.log(response.status, response.statusText);
		}
    
}

// Calls on load
getUserData();