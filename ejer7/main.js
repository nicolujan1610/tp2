
const usersContainer = document.getElementById('users-container')

async function traerDatos(){  
  let peticion = await fetch('https://jsonplaceholder.typicode.com/users')
  let usuarios = await peticion.json()

  crearTarjetasUsuarios(usuarios)
}

function crearTarjetasUsuarios(users) {
  users.forEach(user => {
    let userhtml = `
      <div class="user">
        <p>ID: ${user.id}</p>
        <p>Nombre: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Website: ${user.website}</p>
        <button onclick="verTareas(${user.id})">Ver tareas</button>
        <p id="usuario-${user.id}"></p>
      </div>
    `

    usersContainer.innerHTML += userhtml
  })
}

function salirDeTareas(){
  const tareasModal = document.getElementById('tareas-modal')
  tareasModal.classList.add('disabled')
}

async function verTareas(id){
  const tareasModal = document.getElementById('tareas-modal')
  const listaDeTareas = document.getElementById('tareas-lista')
  listaDeTareas.innerHTML = ''
  let peticion = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
  let tareas = await peticion.json()
  tareas.forEach(tarea => {
    let tareaHTML = `
      <div class="tarea-element">
        <p>ID: ${tarea.id}</p>
        <p>Tarea: ${tarea.title}</p>
        <p>${tarea.completed ? 'Completada ✅': 'Incompleta ❌'}</p>
      </div>
    `

    listaDeTareas.innerHTML += tareaHTML
  })

  tareasModal.classList.remove('disabled')


}


traerDatos()

