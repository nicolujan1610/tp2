const calcularAreaBtn = document.getElementById('calcular-area')
const ladoA = document.getElementById('ladoA')
const ladoB = document.getElementById('ladoB')
const ladoC = document.getElementById('ladoC')

calcularAreaBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let alturaTriangulo = ladoA.value - ladoC.value
  let areaAbajo = ladoB.value * ladoC.value
  let areaArriba = (ladoB.value*alturaTriangulo)/2

  let areaTotal = areaAbajo + areaArriba

  alert('Area: ' + areaTotal)

})