const calcularBtn = document.getElementById('calcular-btn')
const peso = document.getElementById('peso')
const estatura = document.getElementById('estatura')

calcularBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let IMC = peso.value/((estatura.value/100)**2)
  alert('Indice de masa corporal: ' + IMC.toFixed(2)+'%')
})