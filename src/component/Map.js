import React, { useEffect } from 'react'
import styles from './Map.module.css'
import Basemap from 'nyc-lib/nyc/ol/Basemap'

export default function Map() {
  useEffect(() => {
    console.warn("use effect called")
    new Basemap({target: 'map'})
  }) 

   return (
    <div className={styles.map} id='map'></div>
  )
}