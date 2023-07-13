import { useEffect, useState } from "react";
import { ToJson } from "../components/ToJson";
import { User } from "../model/user";
import axios from "axios";

export function DemoListHTP() {
    const [list, setList] = useState<User[]>([])

    useEffect(() => {
        console.log('init')
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log('success', res.data)
            setList(res.data)
        })
    }, [])
    
    function addUser() {
        axios.post<User>('https://jsonplaceholder.typicode.com/users', {
            name: 'Mario'
        }).then(res => {
            setList([...list, res.data])
        })
    }

    function deleteUser(idToRemove: number) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${idToRemove}`)
        .then(() => {
            setList(
            list.filter(item => item.id !== idToRemove)
            )
        })   
    }

    return <div>
        <div>Demo list HTTP</div>

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
