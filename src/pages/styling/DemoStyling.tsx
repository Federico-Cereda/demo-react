import clsx from "clsx";
import { useState } from "react"
import { doSomething } from "../../shared/utils/modal.utils";

export function DemoStyling() {
    const [toggle, setToggle] = useState(false)

    return <div>
        <h1 
        className={ clsx( 'btn', 'btn-primary',{
        'bg-dark': toggle, 
    }) }
        style={ { color: toggle ? 'white' : 'black' } }
        >Styling Demo</h1>

        <hr/>
        <button 
        className={ `btn btn-primary` } 
        onClick={() => setToggle(prev => !prev)}>toggle</button>

        <button onClick={() => doSomething('ciao')}>Show Message</button>

    </div>
}
