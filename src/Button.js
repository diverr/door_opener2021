import React, { useState } from 'react'
import remote from './assets/img/remote.png'
import './Button.css'
import Global from './Global'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDoubleTap } from 'use-double-tap'
import axios from 'axios'

export default function Button() {
  const [opacity, setOpacity] = useState(1)
  const [opening, setOpening] = useState(false)

  const secret = localStorage.getItem('secret') ?? null
  const user = localStorage.getItem('user') ?? null

  const open = async () => {
    if (opening) return
    setOpening(true)

    // const url = `${Global.serviceUrl}/${secret}`;
    // WARNING! change before sending to production
    const url = `${Global.serviceUrl}`

    setOpacity(0.2)

    toast.info('Abriendo puerta... ', {
      autoClose: 2000,
    })

    try {
      await axios.get(url)

      const welcome = user === 'Papá' ? 'bienvenido' : 'bienvenida'

      toast.success(`Puerta abierta, ${welcome} a casa ${user}`, {
        autoClose: 2000,
      })
    } catch (e) {
      toast.error(`Error abriendo la puerta: ${e}`, { autoClose: 2000 })
    } finally {
      setOpacity(1)
      setOpening(false)
    }
  }

  const bind = useDoubleTap(open)

  return (
    <div>
      <img
        src={remote}
        className="button"
        alt="Abrir"
        style={{ opacity: opacity }}
        {...bind}
      />
    </div>
  )
}
