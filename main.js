const form = document.querySelector('form')
const emailInput = document.querySelector('#email')
const btn = document.querySelector('.btn')

form.addEventListener('submit', (event) => {
  event.preventDefault()
})

btn.addEventListener('click', () => {
  const emailValue = emailInput.value

  if(!validEmail(emailValue)) {
    alert('Por favor, digite um email válido!')
  } else {
    alert('Email enviado com sucesso!')
  }
})

function validEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}


