
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

async function verTareas(id){
  let peticion = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  let tarea = await peticion.json()
  console.log(tarea)

  let userP = document.getElementById(`usuario-${id}`)
  userP.innerText = tarea.title
  if(tarea.completed){
    userP.style.color = 'lightgreen'
  }else{
    userP.style.color = 'red'
  }
}


traerDatos()

