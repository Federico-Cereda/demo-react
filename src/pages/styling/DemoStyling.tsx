import { useState } from "react"

export function DemoStyling() {
    const [toggle, setToggle] = useState(false)
    return <div>
        <h1 
        className={ toggle ? 'bg-dark' : 'bg-light'}
        style={ { color: toggle ? 'white' : 'black' } }
        >Styling Demo</h1>

        <button onClick={() => setToggle(prev => !prev)}>toggle</button>

        {JSON.stringify(toggle)}
    </div>
}