let themeBtn = document.querySelector('.themeChange')
themeBtn.addEventListener('click', changeTheme)

function changeTheme() {
	let body = document.querySelector('body')
	let currentTheme = body.getAttribute('data-theme')
	if (currentTheme == 'dark') {
		body.setAttribute('data-theme', 'white')
	} else {
		body.setAttribute('data-theme', 'dark')
	}
}

function StartTheme() {
	let theme = localStorage.getItem('theme')
	let body = document.querySelector('body')
	if (theme == 'dark') {
		body.setAttribute('data-theme', 'dark')
	} else {
		body.setAttribute('data-theme', 'white')
	}
}

StartTheme()

async function sendRequest(url, method, data) {
	if (method == 'POST') {
		let response = await fetch(url, {
			method: 'POST',
			header: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

		response = await response.json()
		return response
	} else if (method == 'GET') {
		url = url + '?' + new URLSearchParams(data)
		let response = await fetch(url, {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		})

		response = await response.json()
		return response
	}
}
