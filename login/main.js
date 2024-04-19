import { API } from '/utils/api'

const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const form = document.getElementById('login-form')

form.addEventListener('submit', (event) => {
	event.preventDefault()
	fetchLogin()
})

async function fetchLogin() {
	try {
		const response = await fetch(API + '/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: usernameInput.value,
				password: passwordInput.value
			})
		})
		if (response.ok) {
			const responseParsed = await response.json()
			const { userId } = responseParsed
			// Add the userId to the cookies so you can access it from the other pages
			document.cookie = `userId=${userId}; max-age=${12 * 60 * 60};`
			window.location.href = "/home/"
		} else {
			//TODO: Add some header on the page to tell the user that password or username are invalid
			console.log('Wrong username or password')
		}
	} catch (e) {
		console.log(e)
	}
}

