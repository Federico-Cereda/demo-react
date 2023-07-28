import { useEffect, useState } from "react";
import { Product } from "../../../model/product";

interface ProductsFormProps {
    active: Product | null;
    onSave: (formData: Omit<Product, 'id'>) => void;
}

export function ProductsForm(props: ProductsFormProps) {
    const [formData, setFormData] = useState<Omit<Product, 'id'>>({ name:'', cost:0 })

    useEffect(() => {
        if (props.active) {
            setFormData(props.active)
        }
    }, [props.active])

    function saveHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        props.onSave(formData)
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        const key = e.currentTarget.name;
        setFormData(prev => ({ ...prev, [key]: value }))
    }

    return (
        <form onSubmit={saveHandler}>
                    <input 
                    value={formData.name} 
                    onChange={onChangeHandler} 
                    name="name" 
                    type="text" 
                    placeholder="Product Name" 
                    className="form-control"/>

                    <input 
                    value={formData.cost} 
                    onChange={onChangeHandler} 
                    name="cost" 
                    type="text" 
                    placeholder="Cost" 
                    className="form-control"/>

                    <button type="submit">
                        {props.active ? 'EDIT' : 'ADD'}
                    </button>
                </form>
    )
}
