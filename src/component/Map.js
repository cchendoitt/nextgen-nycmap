import React, { useContext, useEffect } from 'react'
import'./Map.css'
import { AppContext } from '../App'

export default function Map() {
  const [appContext, setAppContext] = useContext(AppContext)

  useEffect(() => {
    const map = appContext.map;

    // cheat little bit here to display map full screem
    map.getView().setZoom(10)
    map.setTarget(document.getElementById('map'))
  }) 

   return ( 
    <div className='map' id='map'></div>
  )
}