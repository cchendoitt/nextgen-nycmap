import React from 'react'

export default function Demo() {
    const [state, setState] = React.useState({count: 100})

    React.useEffect(() => {
        console.warn("inside useEffect: " + document.getElementById('map'))
        console.warn("use effect called");
    })

    return (
            <div id='map'>
                Count: {state.count}<br/>
                <button onClick={() => setState({count: state.count + 1})}>Increament</button>
            </div>
    )
}