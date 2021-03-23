import React, { useContext, useEffect } from 'react'
import styles from './Map.module.css'
import { AppContext } from '../App'

export default function Map() {
  const [appContext, setAppContext] = useContext(AppContext)

  useEffect(() => {
    const map = appContext.map;
    map.setTarget(document.getElementById('map'))
  }) 

   return ( 
    <div className={styles.map} id='map'></div>
  )
}