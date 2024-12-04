import React from 'react'
import ListMap from '../listMap'
import contactos from '../../../data/data'
import DescargaWhat from '../../partederechaIntro/DescargaWhat'
import './listamensaje.css'


const ListaMensajes = () => {
    
  return (
    <div className='conatiner_cntenido1'>

      <ListMap contactos={contactos}/>
      <div className='color_white'>
      <DescargaWhat/>
      
      </div>
    </div>
 
  )
}

export default ListaMensajes