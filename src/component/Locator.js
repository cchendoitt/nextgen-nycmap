import { useReducer, useState } from 'react'
import styles from './Locator.module.css'
import Geoclient from 'nyc-lib/nyc/Geoclient'
import Map from './Map'

const geocoder = new Geoclient({
  url: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example'
})

function search(state, action) {
  console.warn("search started: " + action.event.target.value)
  if (action.event.keyCode === 13) {
    console.warn(action.event.target.value)
    let result = geocoder.search(action.event.target.value)
    console.warn(result)
  }
}

/*

function located(location) {
  //dispatch({type: 'locator/located', payload: location})
  console.warn("located: " + location.coordinate);
 // map.moveTo()
  //console.warn("base map: " + map.state)
}

function abiguous(possible) {
  //dispatch({type: 'locator/abiguous', payload: possible})
}

geocoder.on('geocoded', located)
geocoder.on('abiguous', abiguous)


*/

export default function Locator() {
  //const map = useMap()
  //const map = BaseMap.useMap()
  
  const [state, dispatch] = useReducer(search, {})
  return (
    <input className={styles.locator} type="text" onKeyUp={(evt) => dispatch({event: evt})} placeholder="Search for a location..."></input>
  )
}