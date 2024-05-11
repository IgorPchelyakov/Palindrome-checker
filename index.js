const checkBtn = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')

checkBtn.addEventListener('click', () => {
	if (textInput.value === '') {
		return alert('Please input a value')
	}
	if (textInput.value.length === 1) {
		result.textContent = `${textInput.value} is a palindrome`
	} else {
		const isPal = isPalindrome(textInput.value)
		if (isPal) {
			result.textContent = `${textInput.value} is a palindrome`
		} else {
			result.textContent = `${textInput.value} is not a palindrome`
		}
	}
})

const isPalindrome = str => {
	const sanitizedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
	const reversedStr = sanitizedStr.split('').reverse().join('')
	return sanitizedStr === reversedStr
}
