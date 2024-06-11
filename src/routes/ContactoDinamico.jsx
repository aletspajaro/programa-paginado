import React from 'react'
import { useParams } from 'react-router-dom'

const ContactoDinamico = () => {
    const {nombre,apellidop,apellidom} = useParams();
   
  return (
    <div>Hola {nombre} {apellidop} {apellidom}</div>
    
  )
}

export default ContactoDinamico
