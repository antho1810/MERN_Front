import Axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function Formulario() {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [salario, setSalario] = useState('')

    const registrar = async(e) =>{
        e.preventDefault()
        const NuevoEmpleado = {nombre, apellido, salario}
        const respuesta = await Axios.post('http://localhost:4000/api', NuevoEmpleado)
       // console.log(respuesta)
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
          })
    }
  return (
    <div className="container col-md-6 mt-4">
<form onSubmit={registrar}>
  <div className="mb-4">
    <input type="text" className="form-control" required placeholder='Nombre' onChange={e =>
    setNombre(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="text" className="form-control" required placeholder='Apelliido' onChange={e =>
    setApellido(e.target.value)}/>
  </div>
  <div className="mb-3">
    <input type="number" className="form-control" required placeholder='Salario' onChange={e =>
    setSalario(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-primary">Guardar</button>
</form>
        
    </div>
  )
}
