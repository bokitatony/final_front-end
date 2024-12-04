
const contactos = [
    {
      nombre: 'palermo',
      id: 1,
      avatar: '/img/palermo.jpg',
      mensajes: [
        { 
          emisor: 'YO', 
          hora: '23:10',
          id: 1,
          texto: 'Hola que tal?', 
          status: 'visto'
        },
        { 
          emisor: 'USUARIO', 
          hora: '23:11', 
          id: 2, 
          texto: 'Si, hoy aprendi estados', 
          status: 'visto' 
        },
        { 
          emisor: 'YO', 
          hora: '23:12', 
          id: 3, 
          texto: 'Eso que significa?', 
          status: 'no-visto' 
        },
        { 
          emisor: 'YO', 
          hora: '23:13', 
          id: 4, 
          texto: 'Estas ahi?', 
          status: 'no-recibido' 
        }
      ]
    },
    {
      nombre: 'riquelme',
      id: 2,
      avatar: '/img/riquelme.jpg',
      mensajes: [
        { 
          emisor: 'YO', 
          hora: '23:10', 
          id: 1, 
          texto: 'hola que es mate?', 
          status: 'visto' 
        },
        { 
          emisor: 'USUARIO', 
          hora: '23:11', 
          id: 2, 
          texto: 'no gracias', 
          status: 'visto' 
        },
        { 
          emisor: 'YO', 
          hora: '23:12', 
          id: 3, 
          texto: 'porque?', 
          status: 'no-visto' 
        },
        { 
          emisor: 'YO', 
          hora: '23:13', 
          id: 4, 
          texto: 'dale riquelme?', 
          status: 'no-recibido' 
        }
      ]
    }
  ]

  export default contactos
  