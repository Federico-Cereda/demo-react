import clsx from "clsx";
import { useState } from "react"

export function DemoStyling() {
    const [toggle, setToggle] = useState(false)

    // const cls = toggle ? 'bg-dark' : 'bg-light';

    return <div>
        <h1 
        className={ clsx( 'btn', 'btn-primary',{
        'bg-dark': toggle, 
    }) }
        style={ { color: toggle ? 'white' : 'black' } }
        >Styling Demo</h1>

        <button 
        className={ `btn btn-primary` } 
        onClick={() => setToggle(prev => !prev)}>toggle</button>

    </div>
}
