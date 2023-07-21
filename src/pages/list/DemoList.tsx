import { useState } from "react";
import { ToJson } from "../../shared/ToJson";
import { PageTitle } from "../../shared/PageTitle";

const initialState = [
    { id: 1, name: 'Fabio' },
    { id: 2, name: 'Lorenzo' },
    { id: 3, name: 'Silvia' }
];

export function DemoList() {
    const [list, setList] = useState(initialState)
    
    function addUser() {
        const newList = [...list, { id: Date.now(), name: 'xyz' }]
        setList(newList)
    }

    function deleteUser(idToRemove: number) { 
        setList(
            list.filter(item => item.id !== idToRemove)
        )
    }

    return <div>
        <PageTitle>Demo list</PageTitle>

        <button onClick={addUser}>Add User</button>
        {
            list.map(item => {
                return (
                <li key={item.id}>
                    {item.name}
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                </li>
                )
            })
        }

        <ToJson data={list} />
    </div>
}
