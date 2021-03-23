
import React, { useState } from 'react';
import Map from './component/Map'
import Locator from './component/Locator'
import Basemap from 'nyc-lib/nyc/ol/Basemap'

export const AppContext = React.createContext() 

export default function App() {
  const [appContext, setAppContext] = useState({map: new Basemap({})}) 
  return (
      <AppContext.Provider value={[appContext, setAppContext]}>
      <div>
        <Map />
        <Locator />
      </div>
    </AppContext.Provider>
  );
}