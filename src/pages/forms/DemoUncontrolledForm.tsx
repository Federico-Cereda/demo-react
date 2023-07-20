// Demo uncontrolled form + Refs
import { useRef, useState } from "react";

export function DemoUncontrolledForm() {
    const [isValid, setIsValid] = useState<Boolean>(false);

    const inputName = useRef<HTMLInputElement>(null)
    const inputLast = useRef<HTMLInputElement>(null)

    function keyHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        const name = inputName.current?.value
        const last = inputLast.current?.value

        const isFormValid = name?.length && last?.length;
        setIsValid(!!isFormValid)

        if (e.key === 'Enter') {
            console.log(name)
            console.log(last)
        }
    }

    console.log('render')

    return <div>
        Demo Uncontrolled Forms
        <input
        type="text"
        className="form-control"
        placeholder="first name"
        onKeyDown={keyHandler}
        ref={inputName}
        />
        
        <input
        type="text"
        className="form-control"
        placeholder="last name"
        onKeyDown={keyHandler}
        ref={inputLast}
        />

        <button disabled={!isValid}>SAVE</button>

    </div>
}
