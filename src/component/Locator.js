import { useReducer, useContext } from 'react'
import './Locator.css'
import Geoclient from 'nyc-lib/nyc/Geoclient'
import { AppContext } from '../App'

export default function Locator() {
  const [appContext, setAppContext] = useContext(AppContext)
  
  const geocoder = new Geoclient({
    url: 'https://maps.nyc.gov/geoclient/v1/search.json?app_key=74DF5DB1D7320A9A2&app_id=nyc-lib-example'
  })
  
  geocoder.on('geocoded', located)
  geocoder.on('abiguous', abiguous)

  function search(state, action) {
    if (action.event.keyCode === 13) {
      geocoder.search(action.event.target.value)
    }
  }
  
  function located(location) {
    const map = appContext.map;

    map.getView().animate({center: location.coordinate, zoom: 16})
  }
  
  function abiguous(possible) {
    // TODO
  }
  
  const [state, dispatch] = useReducer(search, {})
  return (
    <input className='locator' type="text" onKeyUp={(evt) => dispatch({event: evt})} placeholder="Search for a location..."></input>
  )
}