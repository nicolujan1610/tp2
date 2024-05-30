const enviarBtn = document.getElementById('enviar')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const edad = document.getElementById('edad')
const altura = document.getElementById('altura')
const email = document.getElementById('email')
const erroresContainer = document.getElementById('error-messages')

enviarBtn.addEventListener('click', (e) => {
  e.preventDefault()
  verificarForm()
})

const verificarForm = () => {
  let errores = []

  if(
    nombre.value.trim() == '' ||
    apellido.value.trim() == '' ||
    nombre.value.length > 50 ||
    apellido.value.length > 50   
  ){
    errores.push('Verificar nombre y apellido')
  }

  if(edad.value < 0 ){
    errores.push('Edad no puede ser negativo')
  }

  if(edad.value < 18){
    errores.push('Debe ser mayor de edad')
  }

  if(altura.value < 0 || altura.value > 230){
    errores.push('Ingrese altura real')
  }

  if(email.value.length == 0 || !email.value.includes('@') ){
    errores.push('Ingrese Email valido')
  }


  erroresContainer.innerHTML = ''

  errores.forEach(error => {
    let p = document.createElement('p')
    p.innerText = error 
    p.style.color = 'red'
    erroresContainer.appendChild(p)
  })

  if(errores.length == 0){
    let p = document.createElement('p')
    p.innerText = 'Formulario validado 😎'
    p.style.color = 'green'
    erroresContainer.appendChild(p)
  }

}
