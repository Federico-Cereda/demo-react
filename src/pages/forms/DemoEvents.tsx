import clsx from "clsx";
import React, { useState } from "react"

export function DemoEvents() {
    const [focused, setFocused] = useState(false)

    function doSomething(event: React.KeyboardEvent<HTMLInputElement>) {

        if (event.key === "Enter") {
            console.log('do something', event.currentTarget.value)
            event.currentTarget.value = '';
        }
    }

    return <div>
        Demo events

        {/* <button onMouseOver={() => doSomething(123)}>CLICK ME</button> */}
        <input 
        type="text" 
        className={clsx('form-control', { 'bg-dark': focused})}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={doSomething}
        />
    </div>
}