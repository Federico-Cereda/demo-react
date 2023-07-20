// Demo controlled form + Refs
import clsx from "clsx";
import { useState } from "react"

interface FormData {
    name: string;
    lastName: string;
    city: string;
    subscribe: boolean;
}

export const initialState: FormData = { name:'', lastName:'', city:'', subscribe: true }

export function DemoControlledForm() {
    const [formData, setFormData] = useState(initialState)
    const [dirty, setDirty] = useState(false)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const key = e.currentTarget.name;
        const value = e.currentTarget.value;
        setDirty(true);
        setFormData({ ...formData, [key]: value })
    }

    function onChangeCheckboxHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const key = e.currentTarget.name;
        const value = e.currentTarget.checked;
        setDirty(true);
        setFormData({ ...formData, [key]: value })
    }

    function send(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('send', formData)
    }

    const  isNameValid = formData.name.length > 0;
    const  isLastNameValid = formData.lastName.length > 0;
    const  isValid = isNameValid && isLastNameValid;

    return <div>
        Demo Controlled Forms

        <form onSubmit={send}>
            <input
            type="text"
            className={clsx('form-control', { 'is-invalid': !isNameValid && dirty, 'is-valid': isNameValid })}
            placeholder="first name"
            value={formData.name}
            name="name"
            onBlur={() => setDirty(true)}
            onChange={onChangeHandler}
            />
        
            <input
            type="text"
            className={clsx(
                'form-control', 
                { 
                    'is-invalid': !isLastNameValid && dirty, 
                    'is-valid': isLastNameValid 
                }
            )}
            placeholder="last name"
            value={formData.lastName}
            name="lastName"
            onBlur={() => setDirty(true)}
            onChange={onChangeHandler}
            />
            
            <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={onChangeCheckboxHandler}/>
            <button type="submit" disabled={!isValid}>send</button>
        </form>

    </div>
}
