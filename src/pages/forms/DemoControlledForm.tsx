// Demo controlled form + Refs
import clsx from "clsx";
import { useState } from "react"

interface FormData {
    name: string;
    lastName: string;
    city: string;
    subscribe: boolean;
    gender: 'M' | 'F' | '';
}

export const initialState: FormData = { name:'', lastName:'', city:'', subscribe: false, gender:'' }

export function DemoControlledForm() {
    const [formData, setFormData] = useState(initialState)
    const [dirty, setDirty] = useState(false)

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const type = e.currentTarget.type;
        const key = e.currentTarget.name;
        const value = type === 'checkbox' ? (e.currentTarget as HTMLInputElement).checked : e.currentTarget.value;
        setDirty(true);
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    function send(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('send', formData)
    }

    const  isNameValid = formData.name.length > 0;
    const  isLastNameValid = formData.lastName.length > 0;
    const  isGenderValid = formData.gender !== '';
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

            <select 
            className={clsx(
                'form-control', 
                { 
                    'is-invalid': !isGenderValid && dirty, 
                    'is-valid': isGenderValid 
                }
            )} 
            value={formData.gender} 
            onChange={onChangeHandler} 
            name="gender">
            <option value="">Select Gender</option>
                <option value="M">male</option>
                <option value="F">female</option>
                <option value="X">x</option>
            </select>
            
            <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={onChangeHandler}/>
            <button type="submit" disabled={!isValid}>send</button>
        </form>

    </div>
}
