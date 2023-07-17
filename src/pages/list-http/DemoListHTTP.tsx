import { useEffect, useState } from "react";
import { ToJson } from "../../shared/ToJson";
import { User } from "../../model/user";
import axios from "axios";

export function DemoListHTP() {
    const [list, setList] = useState<User[]>([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        console.log('init')
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log('success', res.data)
            setList(res.data)
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => setLoading(false))
    }, [])
    
    function addUser() {
        setError(false);
        setLoading(true);
        axios.post<User>('https://jsonplaceholder.typicode.com/users', {
            name: 'Mario'
        }).then(res => {
            setList(prev => [...prev, res.data])
        })
        .catch(() => {
            setError(true);
        })
        .finally(() => setLoading(false))
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
        <div>Demo list HTTP</div>

        { error && <div>AHIA! problemi server</div> }
        { loading && <div>loading...</div> }

        <button onClick={addUser}>Add User</button>
        {
            list.map(item => {
                return (
                <li key={item.id}>
                    {item.id} - {item.name}
                    <button onClick={() => deleteUser(item.id)}>Delete</button>
                </li>
                )
            })
        }

        <ToJson data={list} />
    </div>
}
