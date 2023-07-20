//esempio utilizzato dalla nuova versione del Router(vedi main.tsx)
import { useState } from "react";
import { ToJson } from "../../shared/ToJson";
import { User } from "../../model/user";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export function DemoListHTTP2() {
    const loader = useLoaderData() as User[];

    const [list, setList] = useState<User[]>(loader)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    
    async function addUser() {
        setError(false);
        setLoading(true);
        try {
            const res = await axios.post<User>('https://jsonplaceholder.typicode.com/users', {
            name: 'Mario'
        })
        setList(prev => [...prev, res.data])
        } catch (e) {
            setError(true);
        }
        setLoading(false);
    }

    function deleteUser(idToRemove: number) {
        setLoading(true);
        axios.delete(`https://jsonplaceholder.typicode.com/users/${idToRemove}`)
        .then(() => {
            setList(
            prev => prev.filter(item => item.id !== idToRemove)
            )
        })
        .finally(() => setLoading(false))
    }

    return <div>
        <div>Demo list HTTP 2</div>

        { error && <div>AHIA! problemi server</div> }
        { loading && <div>loading...</div> }

        <button onClick={addUser}>Add User</button>
        {
            list.map(item => {
                return (
                <li key={item.id}>
                    {item.id} - {item.name}
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                    <button>Details</button>
                </li>
                )
            })
        }

        <ToJson data={list} />
    </div>
}
